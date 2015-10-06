'use strict';
var Marionette = require('./shims/marionette'),
	$          = require('./shims/jquery'),
	app        = require('./app');

module.exports = Marionette.Region.extend({
	el: '#modal',
	constructor: function(){
		Marionette.Region.prototype.constructor.apply(this, arguments);
	},

	onShow: function(view, region, options){
		this.showModal(view);
	},

	getEl: function(selector){
		var $el = $(selector);
		$el.on('hidden', this.close);
		return $el;
	},

	showModal: function(view){
		view.on('close', this.hideModal, this);
		this.$el.modal('show');
	},

	hideModal: function(){
		this.$el.modal('hide');
	}
});	