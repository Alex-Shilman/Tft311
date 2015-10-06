//var mongoose = require('mongoose');
var restful = require('node-restful');
var mongoose = restful.mongoose;

//create MovieSchema
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},

	url: {
		type: String,
		required: true
	}
});

module.exports = MovieSchema;