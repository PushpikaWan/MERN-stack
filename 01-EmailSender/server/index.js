const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(
	new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		//this will call after authenticate
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken',accessToken);
			console.log('refreshToken',refreshToken);
			console.log('profile data', profile);
		}
	)
);

//'google' string interanlly identify google stratergy
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);

//authenticate
app.get('/auth/google/callback', passport.authenticate('google'));

//dynamic port binding with environment variables and 5000 in developer environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
