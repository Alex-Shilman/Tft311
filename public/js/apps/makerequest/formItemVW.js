'use strict';
var Marionette  = require('../../shims/marionette'),
	app         = require('../../app'),
	SaveAble    = require('../../common/behaviors/saveAble');

module.exports = Marionette.ItemView.extend({
	className: 'tfp-form',
	behaviors: {
		SaveAble: {
			behaviorClass: SaveAble
		}
	},

	bindings: {
		'#recipient-name': 'recipient',
		'#recipient-email': 'email',
		'#message-text': 'message'
	},

	onRender: function(){
		this.stickit();
	}
});