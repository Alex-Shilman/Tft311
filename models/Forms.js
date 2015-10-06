var mongoose = require('mongoose'),
	Schema   = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var Form = new Schema({
		role      : { type: String },
		name      : { type: String },
		recipient : { type: String },
		email     : { type: String },
		msg       : { type: String },
		created   : { type: Date, default: Date.now }
}, {collection: 'form'});

module.exports = mongoose.model('Form', Form);