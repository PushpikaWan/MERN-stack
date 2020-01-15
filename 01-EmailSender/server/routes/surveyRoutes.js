const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailtemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {

  app.get('/api/surveys/thanks', (req, res) =>{
    res.send('Thanks for voting!');
  });

	app.post('/api/surveys', async (req, res) => {
    console.log('req',req.body);
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email=>({email})),
        _user: req.user.id,
        dateSent: Date.now()
    });

    //send mail by Mailer
    const mailer = new Mailer(survey, surveyTemplates(survey));
    try{
      await mailer.send();
      await survey.save();
      const user = await req.user.save();
  
      res.send(user);
    } catch(err){
      res.status(422).send(err);
    }

	});
};
