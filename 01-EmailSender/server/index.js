const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //in milliseconds
		keys: [ keys.cookieKey ] //any random string
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	//express we serve up production assets
	//like our main.js and main.css files
	app.use(express.static('client/build'));

	// express will serve up the index.html file
	//if id doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//dynamic port binding with environment variables and 5000 in developer environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
