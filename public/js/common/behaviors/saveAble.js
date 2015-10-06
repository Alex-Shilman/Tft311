'use strict';
var Marionette = require('../../shims/marionette'),
	app        = require('../../app');

module.exports = Marionette.Behavior.extend({
	ui: {
		'save': 'button.tfp-save-js'
	},

	triggers: {
		'click @ui.save': 'save'
	}
});