'use strict';
var Marionette    = require('../../shims/marionette'),
	Backbone      = require('../../shims/backbone'),
	$	      	  = require('../../shims/jquery'),	
	app			  = require('../../app'),
	rolesEntities = require('../../entities/roles'),
	RoleVW        = require('./roleLayoutVW'),
	FormReqVW     = require('./formRequestItemVW'),
	FormItemVW    = require('./formItemVW'),
	API;

API = {
	displayRoles: function(collection){
		var rolesView = new Marionette.CollectionView({
			className: 'col-lg-12',
			id: 'TFP-Roles',
			childView 	: RoleVW,
			collection 	: collection
		});
		rolesView.on('childview:show:formrequests', function(childView, options){
			var requests = childView.getRegion('requests');
			requests.show(API.displayFormRequests(options.model.get('forms'), options.model.get('role')));
			requests.$el.slideToggle();
		});	
		return rolesView;
	},

	displayFormRequests: function(collection, role){
		var formRequests = new Marionette.CollectionView({
			className 		: 'tfp-req-forms',
			childView 		: FormReqVW,
			childViewOptions: {role: role},
			collection 		: new Backbone.Collection(collection)
		});
		formRequests.on('childview:show:form', function(childView, options){
			app.execute('app:modal:show', API.displayModalView(childView, options));
		});
		return formRequests;
	},

	displayModalView: function(childView, options){
		var FromItemModel = Backbone.Model.extend({urlRoot 	: '/forms/api/forms'})
		var modalView = new FormItemVW({
			template 	: app.jst['form-A'], 
			model 		: new FromItemModel({
				name 		: options.model.get('name'), 
				role 		: childView.getOption('role'),
				recipient	: void(0),
				email 		: void(0),
				msg 		: void(0)
			})
		});
		modalView.on('save', function(args){
			args.model.save(null, {
				error: function(){},
				success: function(){
					args.view.trigger('close');
				}
			});
		});
		return modalView;
	}
}	


module.exports = Marionette.Object.extend({
	initialize: function(){
		console.log('controller init');
	},

	onMakeRequest: function(args){
		var roles = app.request('get:roles');
		app.execute('app:title', 'Make request');
		app.execute('start:subapp', this.getOption('appName'));
		roles.on('sync', function(collection, resp, options){
			app.execute('app:screen:show', API.displayRoles(collection));
		});

	}
});