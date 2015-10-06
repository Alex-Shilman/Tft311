var Form = require('../models/Forms');

module.exports = {
	add: function(req, res){
		var form = new Form(req.body);
		form.save(function(err, form){
			if(err){
				res.json({error: 'Error adding request'});
			}else{
				res.json(form);
			}
		});
	},

	index: function(req, res){
		Form.find({}, function(err, data){
			res.json(data);
		});
	},

	getById: function(req, res){
		Form.find({_id: req.params.id }, function(err, form){
			if(err){
				res.json({error: 'Form not found'});
			}else{
				res.json(form);
			}
		});
	},

	delete: function(req, res){
		Form.findOne({_id: req.params.id}, function(err, form){
			if(err){
				res.json({error: 'Form not found'});
			}else{
				form.remove(function(err, form){
					res.json(200, {status: 'Success'});
				});
			}
		});
	}
}