const mongoose = require('mongoose');

const { Schema } = mongoose;

//create schema
const userSchema = new Schema({
	googleID: String
});

//create model
mongoose.model('users', userSchema);
