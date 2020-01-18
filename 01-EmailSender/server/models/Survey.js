const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

//create schema
const surveySchema = new Schema({
	title: String,
	subject: String,
	body: String,
	recipients: [ RecipientSchema ],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	//relation ship of survey and user
	_user: { type: Schema.Types.ObjectId, ref:'User'},
	dateSent: Date,
	lastRespondedDate: Date
});

//create model
mongoose.model('surveys', surveySchema);
