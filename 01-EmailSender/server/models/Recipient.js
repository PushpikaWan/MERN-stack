const mongoose = require('mongoose');

const { Schema } = mongoose;

//create schema
const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false }
});

//create model
mongoose.model('recipients', recipientSchema);
