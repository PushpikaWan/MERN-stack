const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);
//dynamic port binding with environment variables and 5000 in developer environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
