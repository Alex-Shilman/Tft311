var Contact = require('../models/Contacts');

module.exports = {
	add: function(req, res){
		var contact = new Contact(req.body);
		contact.save(function(err, contact){
			if(err){
				res.json({error: 'Error adding contact'});
			}else{
				res.json(contact);
			}
		});
	},

	index: function(req, res){
		Contact.find({}, function(err, data){
			res.json(data);
		});
	},

	getById: function(req, res){
		Contact.find({_id: req.params.id}, function(err, contact){
			if(err){
				res.json({error: 'Contact not found'});
			}else{
				res.json(contact);
			}
		});
	},

	delete: function(req, res){
		Contact.findOne({_id: req.params.id}, function(err, contact){
			if(err){
				res.json({error: 'Contact not found'});
			}else{
				contact.remove(function(err, contact){
					res.json(200, {status: 'Success'});
				});
			}
		});
	}
}