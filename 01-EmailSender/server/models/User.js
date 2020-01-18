const mongoose = require('mongoose');

const { Schema } = mongoose;

//create schema
const userSchema = new Schema({
	googleID: String,
	credits: { type: Number, default: 5 },
});

//create model
mongoose.model('users', userSchema);
