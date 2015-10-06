'use strict';
var Marionette = require('../../shims/marionette'),
	app        = require('../../app');

module.exports = Marionette.ItemView.extend({
	className: 'tfp-form-request',
	template: app.jst['form-request'],
	triggers: {
		'click': 'show:form'
	}
});	