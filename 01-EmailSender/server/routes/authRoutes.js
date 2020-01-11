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
};
