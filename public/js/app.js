var Marionette  = require('./shims/marionette'),
	Backbone    = require('./shims/backbone'),
	_           = require('./shims/underscore'),
	ModalRegion = require('./modalRegion'),
	JST         = require('../templates/jst'),
	App;

App = Marionette.Application.extend({
	jst: {},
	jsl: {},
	initialize: function(){
		this.precompileTemplates();
		this.addRegions({
			mainRegion: '#TFP_viewport',
			modal: ModalRegion
		});

		this.mainRegion.on('before:show', function(){
			this.el.style.top = '50px';
			this.el.style.opacity = 0;
		});

		this.mainRegion.on('show', function(){
			this.$el.animate({opacity:1, top:0});
		});

	},

	precompileTemplates: function(){
		for(var layout in JST.layouts) this.jsl[layout] = _.template(JST.layouts[layout]);
		for(var temp in JST.templates) this.jst[temp] = _.template(JST.templates[temp]);
	},

	onStart: function(){
	},

	getCurrentRoute: function(){
		return Backbone.history.fragment;
	}
});

module.exports = window.app = new App();
