'use strict';
var Marionette = require('../../shims/marionette'),
	app        = require('../../app');

module.exports = Marionette.LayoutView.extend({
	template: app.jsl['role'],
	className: function(){
		return 'tfp-accordion-row';
	},

	ui: {
		roleHead: '.accordion-head'
	},

	regions: {
		requests: '.role-requests'
	},

	triggers: {
		'click @ui.roleHead': 'show:formrequests'
	}
});