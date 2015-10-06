'use strict';
var Marionette = require('../shims/marionette'),
	Backbone   = require('../shims/backbone'),
	app        = require('../app'),
	API;

API = {
	getRoles: function(options){
		var Roles = Backbone.Collection.extend({
			url: '/roles'
		});
		var roles = new Roles();
		roles.fetch();
		return roles;

	}
}

app.reqres.setHandler('get:roles', function(options){
	return API.getRoles(options);
});	

