'use strict';
var Marionette = require('../../shims/marionette'),
	Controller = require('./controller'),
	Router     = require('./router'),
	app        = require('../../app');

module.exports = Marionette.Module.extend({
	startWithParent: false,
	_started: false,
	initialize: function(){
		this.controller = new Controller({appName: this.moduleName});
		this.router = new Router({controller: this.controller});
	},

	onNavigateRequestpage: function(data){
		this.controller.triggerMethod('make:request', data);
		app.execute('app:navigate', 'make_request');
	},

	onStart: function(){
		this._started = true;
		console.log(this.moduleName, 'started...');
	},

	onStop: function(){
		this._started = false;
		console.log(this.moduleName, 'stopped...');
	}
});

