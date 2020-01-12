const passport = require('passport');

module.exports = (app) => {
	//'google' string interanlly identify google stratergy
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: [ 'profile', 'email' ]
		})
	);

	//authenticate
	app.get('/auth/google/callback', passport.authenticate('google'));

	//passport attach prpoerties to req object it contatins req.user, req.logout() as well
	app.get('/api/logout', (req, res) =>{
		req.logout(); //take and kill cookie
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
