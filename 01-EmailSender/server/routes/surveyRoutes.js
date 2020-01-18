const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailtemplates/surveyTemplate');

const Survey = mongoose.model('surveys');
const Recipient = mongoose.model('recipients');

module.exports = (app) => {
	app.get('/api/surveys/:surveyId/:choice', (req, res) => {
		res.send('Thanks for voting!');
	});

	app.post('/api/surveys', async (req, res) => {
		console.log('req', req.body);
		const { title, subject, body, recipients } = req.body;
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map((email) => new Recipient({ email })),
			_user: req.user.id,
      dateSent: Date.now(),
      lastRespondedDate: ''
		});

		//send mail by Mailer
		const mailer = new Mailer(survey, surveyTemplates(survey));
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	app.post('/api/surveys/webhooks', async (req, res) => {
		const p = new Path('/api/surveys/:surveyId/:choice');
		const ev = _.chain(req.body)
			.map(({ email, url }) => {
				const match = p.test(new URL(url).pathname);
				if (match) {
					return { email, surveyId: match.surveyId, choice: match.choice };
				}
			})
			.compact()
      .uniqBy('email', 'surveyId')
      .tap(ev => console.log(ev))
			.each(({surveyId, email, choice}) => {
				Survey.updateOne(
					{
						_id: surveyId,
						recipients: {
							$elemMatch: { email: email, responded: false }
						}
          },{
            $inc: { [choice]: 1},
            $set: { 'recipients.$.responded': true},
            lastRespondedDate: new Date()
          }).exec();
			})
      .value();
      console.log('full ev:',ev);

		res.send({});
	});
};
