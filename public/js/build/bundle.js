(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../templates/jst":16,"./modalRegion":11,"./shims/backbone":12,"./shims/marionette":14,"./shims/underscore":15}],2:[function(require,module,exports){
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
},{"../../app":1,"../../entities/roles":9,"../../shims/backbone":12,"../../shims/jquery":13,"../../shims/marionette":14,"./formItemVW":3,"./formRequestItemVW":4,"./roleLayoutVW":6}],3:[function(require,module,exports){
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
},{"../../app":1,"../../common/behaviors/saveAble":8,"../../shims/marionette":14}],4:[function(require,module,exports){
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
},{"../../app":1,"../../shims/marionette":14}],5:[function(require,module,exports){
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


},{"../../app":1,"../../shims/marionette":14,"./controller":2,"./router":7}],6:[function(require,module,exports){
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
},{"../../app":1,"../../shims/marionette":14}],7:[function(require,module,exports){
'use strict';
var Marionette = require('../../shims/marionette');

module.exports = Marionette.AppRouter.extend({
	initialize: function(options){},
	appRoutes: {
		'make_request': 'onMakeRequest'
	}
});
},{"../../shims/marionette":14}],8:[function(require,module,exports){
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
},{"../../app":1,"../../shims/marionette":14}],9:[function(require,module,exports){
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


},{"../app":1,"../shims/backbone":12,"../shims/marionette":14}],10:[function(require,module,exports){
var app            = require('./app'),
	Backbone  	   = require('./shims/backbone'),
	MakeRequestApp = require('./apps/makerequest/make_request_app');

app.on('start', function(){
	//load modules
	console.log('app started');
	app.module('MakeRequestApp', MakeRequestApp);

	if(Backbone.history){
		Backbone.history.start();
		(!app.getCurrentRoute()) && app.MakeRequestApp.triggerMethod('navigate:requestpage');
	}

});

app.commands.setHandler('start:subapp', function(appName, args){
	var currentApp = appName ? app.module(appName)  : null;
	if(app.currentApp == currentApp) return;

	(!!app.currentApp) && app.currentApp.stop();
	app.currentApp = currentApp;
	(!!currentApp) && app.currentApp.start();
});

app.commands.setHandler('app:screen:show', function(view){
	app.mainRegion.show(view);
});

app.commands.setHandler('app:modal:show', function(view){
	debugger;
	app.modal.show(view);
});

app.commands.setHandler('app:title', function(title){
	document.title = title;
});

app.commands.setHandler('app:navigate', function(path, trigger){
	Backbone.history.navigate(path, { trigger: trigger || false });
});
},{"./app":1,"./apps/makerequest/make_request_app":5,"./shims/backbone":12}],11:[function(require,module,exports){
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
},{"./app":1,"./shims/jquery":13,"./shims/marionette":14}],12:[function(require,module,exports){
module.exports = Backbone;
},{}],13:[function(require,module,exports){
module.exports = jQuery;
},{}],14:[function(require,module,exports){
module.exports = Backbone.Marionette;
},{}],15:[function(require,module,exports){
module.exports = _;
},{}],16:[function(require,module,exports){
module.exports = {
	layouts: {
		'role': [
			'<a class="accordion-head" tabindex="0">',
				'<%=role%>',
			'</a>',
			'<div class="role-requests" style="display:none;"></div>'
		].join('\n')
		
	},

	templates: {
		'form-request': [
			'<a href="#" style="display:block;">*<%=name%></a>'
		].join('\n'),

		'form-A': [
			'<div class="modal-dialog">',
			    '<div class="modal-content">',
			      '<div class="modal-header">',
			        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
			        '<h4 class="modal-title" id="myModalLabel"><%=name%></h4>',
			      '</div>',
			      '<div class="modal-body">',
			      '<form>',
			          '<div class="form-group">',
			            '<label for="recipient-name" class="control-label">Recipient:</label>',
			            '<input type="text" class="form-control" id="recipient-name">',
			          '</div>',
			          '<div class="form-group">',
			            '<label for="recipient-email" class="control-label">Email:</label>',
			            '<input type="text" class="form-control" id="recipient-email">',
			          '</div>',
			          '<div class="form-group">',
			            '<label for="message-text" class="control-label">Message:</label>',
			            '<textarea class="form-control" id="message-text"></textarea>',
			          '</div>',
		          '</form>',
			      '</div>',
			      '<div class="modal-footer">',
			        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
			        '<button type="button" class="btn btn-primary tfp-save-js">Save changes</button>',
			      '</div>',
			    '</div>',
			'</div>'
		].join('\n')
	}
}
},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwicHVibGljL2pzL2FwcC5qcyIsInB1YmxpYy9qcy9hcHBzL21ha2VyZXF1ZXN0L2NvbnRyb2xsZXIuanMiLCJwdWJsaWMvanMvYXBwcy9tYWtlcmVxdWVzdC9mb3JtSXRlbVZXLmpzIiwicHVibGljL2pzL2FwcHMvbWFrZXJlcXVlc3QvZm9ybVJlcXVlc3RJdGVtVlcuanMiLCJwdWJsaWMvanMvYXBwcy9tYWtlcmVxdWVzdC9tYWtlX3JlcXVlc3RfYXBwLmpzIiwicHVibGljL2pzL2FwcHMvbWFrZXJlcXVlc3Qvcm9sZUxheW91dFZXLmpzIiwicHVibGljL2pzL2FwcHMvbWFrZXJlcXVlc3Qvcm91dGVyLmpzIiwicHVibGljL2pzL2NvbW1vbi9iZWhhdmlvcnMvc2F2ZUFibGUuanMiLCJwdWJsaWMvanMvZW50aXRpZXMvcm9sZXMuanMiLCJwdWJsaWMvanMvbWFpbi5qcyIsInB1YmxpYy9qcy9tb2RhbFJlZ2lvbi5qcyIsInB1YmxpYy9qcy9zaGltcy9iYWNrYm9uZS5qcyIsInB1YmxpYy9qcy9zaGltcy9qcXVlcnkuanMiLCJwdWJsaWMvanMvc2hpbXMvbWFyaW9uZXR0ZS5qcyIsInB1YmxpYy9qcy9zaGltcy91bmRlcnNjb3JlLmpzIiwicHVibGljL3RlbXBsYXRlcy9qc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgTWFyaW9uZXR0ZSAgPSByZXF1aXJlKCcuL3NoaW1zL21hcmlvbmV0dGUnKSxcblx0QmFja2JvbmUgICAgPSByZXF1aXJlKCcuL3NoaW1zL2JhY2tib25lJyksXG5cdF8gICAgICAgICAgID0gcmVxdWlyZSgnLi9zaGltcy91bmRlcnNjb3JlJyksXG5cdE1vZGFsUmVnaW9uID0gcmVxdWlyZSgnLi9tb2RhbFJlZ2lvbicpLFxuXHRKU1QgICAgICAgICA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9qc3QnKSxcblx0QXBwO1xuXG5BcHAgPSBNYXJpb25ldHRlLkFwcGxpY2F0aW9uLmV4dGVuZCh7XG5cdGpzdDoge30sXG5cdGpzbDoge30sXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5wcmVjb21waWxlVGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5hZGRSZWdpb25zKHtcblx0XHRcdG1haW5SZWdpb246ICcjVEZQX3ZpZXdwb3J0Jyxcblx0XHRcdG1vZGFsOiBNb2RhbFJlZ2lvblxuXHRcdH0pO1xuXG5cdFx0dGhpcy5tYWluUmVnaW9uLm9uKCdiZWZvcmU6c2hvdycsIGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmVsLnN0eWxlLnRvcCA9ICc1MHB4Jztcblx0XHRcdHRoaXMuZWwuc3R5bGUub3BhY2l0eSA9IDA7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm1haW5SZWdpb24ub24oJ3Nob3cnLCBmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy4kZWwuYW5pbWF0ZSh7b3BhY2l0eToxLCB0b3A6MH0pO1xuXHRcdH0pO1xuXG5cdH0sXG5cblx0cHJlY29tcGlsZVRlbXBsYXRlczogZnVuY3Rpb24oKXtcblx0XHRmb3IodmFyIGxheW91dCBpbiBKU1QubGF5b3V0cykgdGhpcy5qc2xbbGF5b3V0XSA9IF8udGVtcGxhdGUoSlNULmxheW91dHNbbGF5b3V0XSk7XG5cdFx0Zm9yKHZhciB0ZW1wIGluIEpTVC50ZW1wbGF0ZXMpIHRoaXMuanN0W3RlbXBdID0gXy50ZW1wbGF0ZShKU1QudGVtcGxhdGVzW3RlbXBdKTtcblx0fSxcblxuXHRvblN0YXJ0OiBmdW5jdGlvbigpe1xuXHR9LFxuXG5cdGdldEN1cnJlbnRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LmFwcCA9IG5ldyBBcHAoKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBNYXJpb25ldHRlICAgID0gcmVxdWlyZSgnLi4vLi4vc2hpbXMvbWFyaW9uZXR0ZScpLFxuXHRCYWNrYm9uZSAgICAgID0gcmVxdWlyZSgnLi4vLi4vc2hpbXMvYmFja2JvbmUnKSxcblx0JFx0ICAgICAgXHQgID0gcmVxdWlyZSgnLi4vLi4vc2hpbXMvanF1ZXJ5JyksXHRcblx0YXBwXHRcdFx0ICA9IHJlcXVpcmUoJy4uLy4uL2FwcCcpLFxuXHRyb2xlc0VudGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vZW50aXRpZXMvcm9sZXMnKSxcblx0Um9sZVZXICAgICAgICA9IHJlcXVpcmUoJy4vcm9sZUxheW91dFZXJyksXG5cdEZvcm1SZXFWVyAgICAgPSByZXF1aXJlKCcuL2Zvcm1SZXF1ZXN0SXRlbVZXJyksXG5cdEZvcm1JdGVtVlcgICAgPSByZXF1aXJlKCcuL2Zvcm1JdGVtVlcnKSxcblx0QVBJO1xuXG5BUEkgPSB7XG5cdGRpc3BsYXlSb2xlczogZnVuY3Rpb24oY29sbGVjdGlvbil7XG5cdFx0dmFyIHJvbGVzVmlldyA9IG5ldyBNYXJpb25ldHRlLkNvbGxlY3Rpb25WaWV3KHtcblx0XHRcdGNsYXNzTmFtZTogJ2NvbC1sZy0xMicsXG5cdFx0XHRpZDogJ1RGUC1Sb2xlcycsXG5cdFx0XHRjaGlsZFZpZXcgXHQ6IFJvbGVWVyxcblx0XHRcdGNvbGxlY3Rpb24gXHQ6IGNvbGxlY3Rpb25cblx0XHR9KTtcblx0XHRyb2xlc1ZpZXcub24oJ2NoaWxkdmlldzpzaG93OmZvcm1yZXF1ZXN0cycsIGZ1bmN0aW9uKGNoaWxkVmlldywgb3B0aW9ucyl7XG5cdFx0XHR2YXIgcmVxdWVzdHMgPSBjaGlsZFZpZXcuZ2V0UmVnaW9uKCdyZXF1ZXN0cycpO1xuXHRcdFx0cmVxdWVzdHMuc2hvdyhBUEkuZGlzcGxheUZvcm1SZXF1ZXN0cyhvcHRpb25zLm1vZGVsLmdldCgnZm9ybXMnKSwgb3B0aW9ucy5tb2RlbC5nZXQoJ3JvbGUnKSkpO1xuXHRcdFx0cmVxdWVzdHMuJGVsLnNsaWRlVG9nZ2xlKCk7XG5cdFx0fSk7XHRcblx0XHRyZXR1cm4gcm9sZXNWaWV3O1xuXHR9LFxuXG5cdGRpc3BsYXlGb3JtUmVxdWVzdHM6IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHJvbGUpe1xuXHRcdHZhciBmb3JtUmVxdWVzdHMgPSBuZXcgTWFyaW9uZXR0ZS5Db2xsZWN0aW9uVmlldyh7XG5cdFx0XHRjbGFzc05hbWUgXHRcdDogJ3RmcC1yZXEtZm9ybXMnLFxuXHRcdFx0Y2hpbGRWaWV3IFx0XHQ6IEZvcm1SZXFWVyxcblx0XHRcdGNoaWxkVmlld09wdGlvbnM6IHtyb2xlOiByb2xlfSxcblx0XHRcdGNvbGxlY3Rpb24gXHRcdDogbmV3IEJhY2tib25lLkNvbGxlY3Rpb24oY29sbGVjdGlvbilcblx0XHR9KTtcblx0XHRmb3JtUmVxdWVzdHMub24oJ2NoaWxkdmlldzpzaG93OmZvcm0nLCBmdW5jdGlvbihjaGlsZFZpZXcsIG9wdGlvbnMpe1xuXHRcdFx0YXBwLmV4ZWN1dGUoJ2FwcDptb2RhbDpzaG93JywgQVBJLmRpc3BsYXlNb2RhbFZpZXcoY2hpbGRWaWV3LCBvcHRpb25zKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZvcm1SZXF1ZXN0cztcblx0fSxcblxuXHRkaXNwbGF5TW9kYWxWaWV3OiBmdW5jdGlvbihjaGlsZFZpZXcsIG9wdGlvbnMpe1xuXHRcdHZhciBGcm9tSXRlbU1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHt1cmxSb290IFx0OiAnL2Zvcm1zL2FwaS9mb3Jtcyd9KVxuXHRcdHZhciBtb2RhbFZpZXcgPSBuZXcgRm9ybUl0ZW1WVyh7XG5cdFx0XHR0ZW1wbGF0ZSBcdDogYXBwLmpzdFsnZm9ybS1BJ10sIFxuXHRcdFx0bW9kZWwgXHRcdDogbmV3IEZyb21JdGVtTW9kZWwoe1xuXHRcdFx0XHRuYW1lIFx0XHQ6IG9wdGlvbnMubW9kZWwuZ2V0KCduYW1lJyksIFxuXHRcdFx0XHRyb2xlIFx0XHQ6IGNoaWxkVmlldy5nZXRPcHRpb24oJ3JvbGUnKSxcblx0XHRcdFx0cmVjaXBpZW50XHQ6IHZvaWQoMCksXG5cdFx0XHRcdGVtYWlsIFx0XHQ6IHZvaWQoMCksXG5cdFx0XHRcdG1zZyBcdFx0OiB2b2lkKDApXG5cdFx0XHR9KVxuXHRcdH0pO1xuXHRcdG1vZGFsVmlldy5vbignc2F2ZScsIGZ1bmN0aW9uKGFyZ3Mpe1xuXHRcdFx0YXJncy5tb2RlbC5zYXZlKG51bGwsIHtcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCl7fSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRhcmdzLnZpZXcudHJpZ2dlcignY2xvc2UnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG1vZGFsVmlldztcblx0fVxufVx0XG5cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJpb25ldHRlLk9iamVjdC5leHRlbmQoe1xuXHRpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKCdjb250cm9sbGVyIGluaXQnKTtcblx0fSxcblxuXHRvbk1ha2VSZXF1ZXN0OiBmdW5jdGlvbihhcmdzKXtcblx0XHR2YXIgcm9sZXMgPSBhcHAucmVxdWVzdCgnZ2V0OnJvbGVzJyk7XG5cdFx0YXBwLmV4ZWN1dGUoJ2FwcDp0aXRsZScsICdNYWtlIHJlcXVlc3QnKTtcblx0XHRhcHAuZXhlY3V0ZSgnc3RhcnQ6c3ViYXBwJywgdGhpcy5nZXRPcHRpb24oJ2FwcE5hbWUnKSk7XG5cdFx0cm9sZXMub24oJ3N5bmMnLCBmdW5jdGlvbihjb2xsZWN0aW9uLCByZXNwLCBvcHRpb25zKXtcblx0XHRcdGFwcC5leGVjdXRlKCdhcHA6c2NyZWVuOnNob3cnLCBBUEkuZGlzcGxheVJvbGVzKGNvbGxlY3Rpb24pKTtcblx0XHR9KTtcblxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgTWFyaW9uZXR0ZSAgPSByZXF1aXJlKCcuLi8uLi9zaGltcy9tYXJpb25ldHRlJyksXG5cdGFwcCAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vYXBwJyksXG5cdFNhdmVBYmxlICAgID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2JlaGF2aW9ycy9zYXZlQWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlvbmV0dGUuSXRlbVZpZXcuZXh0ZW5kKHtcblx0Y2xhc3NOYW1lOiAndGZwLWZvcm0nLFxuXHRiZWhhdmlvcnM6IHtcblx0XHRTYXZlQWJsZToge1xuXHRcdFx0YmVoYXZpb3JDbGFzczogU2F2ZUFibGVcblx0XHR9XG5cdH0sXG5cblx0YmluZGluZ3M6IHtcblx0XHQnI3JlY2lwaWVudC1uYW1lJzogJ3JlY2lwaWVudCcsXG5cdFx0JyNyZWNpcGllbnQtZW1haWwnOiAnZW1haWwnLFxuXHRcdCcjbWVzc2FnZS10ZXh0JzogJ21lc3NhZ2UnXG5cdH0sXG5cblx0b25SZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5zdGlja2l0KCk7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnLi4vLi4vc2hpbXMvbWFyaW9uZXR0ZScpLFxuXHRhcHAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vYXBwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFyaW9uZXR0ZS5JdGVtVmlldy5leHRlbmQoe1xuXHRjbGFzc05hbWU6ICd0ZnAtZm9ybS1yZXF1ZXN0Jyxcblx0dGVtcGxhdGU6IGFwcC5qc3RbJ2Zvcm0tcmVxdWVzdCddLFxuXHR0cmlnZ2Vyczoge1xuXHRcdCdjbGljayc6ICdzaG93OmZvcm0nXG5cdH1cbn0pO1x0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCcuLi8uLi9zaGltcy9tYXJpb25ldHRlJyksXG5cdENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXInKSxcblx0Um91dGVyICAgICA9IHJlcXVpcmUoJy4vcm91dGVyJyksXG5cdGFwcCAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9hcHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXJpb25ldHRlLk1vZHVsZS5leHRlbmQoe1xuXHRzdGFydFdpdGhQYXJlbnQ6IGZhbHNlLFxuXHRfc3RhcnRlZDogZmFsc2UsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoe2FwcE5hbWU6IHRoaXMubW9kdWxlTmFtZX0pO1xuXHRcdHRoaXMucm91dGVyID0gbmV3IFJvdXRlcih7Y29udHJvbGxlcjogdGhpcy5jb250cm9sbGVyfSk7XG5cdH0sXG5cblx0b25OYXZpZ2F0ZVJlcXVlc3RwYWdlOiBmdW5jdGlvbihkYXRhKXtcblx0XHR0aGlzLmNvbnRyb2xsZXIudHJpZ2dlck1ldGhvZCgnbWFrZTpyZXF1ZXN0JywgZGF0YSk7XG5cdFx0YXBwLmV4ZWN1dGUoJ2FwcDpuYXZpZ2F0ZScsICdtYWtlX3JlcXVlc3QnKTtcblx0fSxcblxuXHRvblN0YXJ0OiBmdW5jdGlvbigpe1xuXHRcdHRoaXMuX3N0YXJ0ZWQgPSB0cnVlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMubW9kdWxlTmFtZSwgJ3N0YXJ0ZWQuLi4nKTtcblx0fSxcblxuXHRvblN0b3A6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMubW9kdWxlTmFtZSwgJ3N0b3BwZWQuLi4nKTtcblx0fVxufSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBNYXJpb25ldHRlID0gcmVxdWlyZSgnLi4vLi4vc2hpbXMvbWFyaW9uZXR0ZScpLFxuXHRhcHAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vYXBwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFyaW9uZXR0ZS5MYXlvdXRWaWV3LmV4dGVuZCh7XG5cdHRlbXBsYXRlOiBhcHAuanNsWydyb2xlJ10sXG5cdGNsYXNzTmFtZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJ3RmcC1hY2NvcmRpb24tcm93Jztcblx0fSxcblxuXHR1aToge1xuXHRcdHJvbGVIZWFkOiAnLmFjY29yZGlvbi1oZWFkJ1xuXHR9LFxuXG5cdHJlZ2lvbnM6IHtcblx0XHRyZXF1ZXN0czogJy5yb2xlLXJlcXVlc3RzJ1xuXHR9LFxuXG5cdHRyaWdnZXJzOiB7XG5cdFx0J2NsaWNrIEB1aS5yb2xlSGVhZCc6ICdzaG93OmZvcm1yZXF1ZXN0cydcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCcuLi8uLi9zaGltcy9tYXJpb25ldHRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFyaW9uZXR0ZS5BcHBSb3V0ZXIuZXh0ZW5kKHtcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7fSxcblx0YXBwUm91dGVzOiB7XG5cdFx0J21ha2VfcmVxdWVzdCc6ICdvbk1ha2VSZXF1ZXN0J1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgTWFyaW9uZXR0ZSA9IHJlcXVpcmUoJy4uLy4uL3NoaW1zL21hcmlvbmV0dGUnKSxcblx0YXBwICAgICAgICA9IHJlcXVpcmUoJy4uLy4uL2FwcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlvbmV0dGUuQmVoYXZpb3IuZXh0ZW5kKHtcblx0dWk6IHtcblx0XHQnc2F2ZSc6ICdidXR0b24udGZwLXNhdmUtanMnXG5cdH0sXG5cblx0dHJpZ2dlcnM6IHtcblx0XHQnY2xpY2sgQHVpLnNhdmUnOiAnc2F2ZSdcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCcuLi9zaGltcy9tYXJpb25ldHRlJyksXG5cdEJhY2tib25lICAgPSByZXF1aXJlKCcuLi9zaGltcy9iYWNrYm9uZScpLFxuXHRhcHAgICAgICAgID0gcmVxdWlyZSgnLi4vYXBwJyksXG5cdEFQSTtcblxuQVBJID0ge1xuXHRnZXRSb2xlczogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIFJvbGVzID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuXHRcdFx0dXJsOiAnL3JvbGVzJ1xuXHRcdH0pO1xuXHRcdHZhciByb2xlcyA9IG5ldyBSb2xlcygpO1xuXHRcdHJvbGVzLmZldGNoKCk7XG5cdFx0cmV0dXJuIHJvbGVzO1xuXG5cdH1cbn1cblxuYXBwLnJlcXJlcy5zZXRIYW5kbGVyKCdnZXQ6cm9sZXMnLCBmdW5jdGlvbihvcHRpb25zKXtcblx0cmV0dXJuIEFQSS5nZXRSb2xlcyhvcHRpb25zKTtcbn0pO1x0XG5cbiIsInZhciBhcHAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vYXBwJyksXG5cdEJhY2tib25lICBcdCAgID0gcmVxdWlyZSgnLi9zaGltcy9iYWNrYm9uZScpLFxuXHRNYWtlUmVxdWVzdEFwcCA9IHJlcXVpcmUoJy4vYXBwcy9tYWtlcmVxdWVzdC9tYWtlX3JlcXVlc3RfYXBwJyk7XG5cbmFwcC5vbignc3RhcnQnLCBmdW5jdGlvbigpe1xuXHQvL2xvYWQgbW9kdWxlc1xuXHRjb25zb2xlLmxvZygnYXBwIHN0YXJ0ZWQnKTtcblx0YXBwLm1vZHVsZSgnTWFrZVJlcXVlc3RBcHAnLCBNYWtlUmVxdWVzdEFwcCk7XG5cblx0aWYoQmFja2JvbmUuaGlzdG9yeSl7XG5cdFx0QmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXHRcdCghYXBwLmdldEN1cnJlbnRSb3V0ZSgpKSAmJiBhcHAuTWFrZVJlcXVlc3RBcHAudHJpZ2dlck1ldGhvZCgnbmF2aWdhdGU6cmVxdWVzdHBhZ2UnKTtcblx0fVxuXG59KTtcblxuYXBwLmNvbW1hbmRzLnNldEhhbmRsZXIoJ3N0YXJ0OnN1YmFwcCcsIGZ1bmN0aW9uKGFwcE5hbWUsIGFyZ3Mpe1xuXHR2YXIgY3VycmVudEFwcCA9IGFwcE5hbWUgPyBhcHAubW9kdWxlKGFwcE5hbWUpICA6IG51bGw7XG5cdGlmKGFwcC5jdXJyZW50QXBwID09IGN1cnJlbnRBcHApIHJldHVybjtcblxuXHQoISFhcHAuY3VycmVudEFwcCkgJiYgYXBwLmN1cnJlbnRBcHAuc3RvcCgpO1xuXHRhcHAuY3VycmVudEFwcCA9IGN1cnJlbnRBcHA7XG5cdCghIWN1cnJlbnRBcHApICYmIGFwcC5jdXJyZW50QXBwLnN0YXJ0KCk7XG59KTtcblxuYXBwLmNvbW1hbmRzLnNldEhhbmRsZXIoJ2FwcDpzY3JlZW46c2hvdycsIGZ1bmN0aW9uKHZpZXcpe1xuXHRhcHAubWFpblJlZ2lvbi5zaG93KHZpZXcpO1xufSk7XG5cbmFwcC5jb21tYW5kcy5zZXRIYW5kbGVyKCdhcHA6bW9kYWw6c2hvdycsIGZ1bmN0aW9uKHZpZXcpe1xuXHRkZWJ1Z2dlcjtcblx0YXBwLm1vZGFsLnNob3codmlldyk7XG59KTtcblxuYXBwLmNvbW1hbmRzLnNldEhhbmRsZXIoJ2FwcDp0aXRsZScsIGZ1bmN0aW9uKHRpdGxlKXtcblx0ZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbn0pO1xuXG5hcHAuY29tbWFuZHMuc2V0SGFuZGxlcignYXBwOm5hdmlnYXRlJywgZnVuY3Rpb24ocGF0aCwgdHJpZ2dlcil7XG5cdEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUocGF0aCwgeyB0cmlnZ2VyOiB0cmlnZ2VyIHx8IGZhbHNlIH0pO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIE1hcmlvbmV0dGUgPSByZXF1aXJlKCcuL3NoaW1zL21hcmlvbmV0dGUnKSxcblx0JCAgICAgICAgICA9IHJlcXVpcmUoJy4vc2hpbXMvanF1ZXJ5JyksXG5cdGFwcCAgICAgICAgPSByZXF1aXJlKCcuL2FwcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlvbmV0dGUuUmVnaW9uLmV4dGVuZCh7XG5cdGVsOiAnI21vZGFsJyxcblx0Y29uc3RydWN0b3I6IGZ1bmN0aW9uKCl7XG5cdFx0TWFyaW9uZXR0ZS5SZWdpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0b25TaG93OiBmdW5jdGlvbih2aWV3LCByZWdpb24sIG9wdGlvbnMpe1xuXHRcdHRoaXMuc2hvd01vZGFsKHZpZXcpO1xuXHR9LFxuXG5cdGdldEVsOiBmdW5jdGlvbihzZWxlY3Rvcil7XG5cdFx0dmFyICRlbCA9ICQoc2VsZWN0b3IpO1xuXHRcdCRlbC5vbignaGlkZGVuJywgdGhpcy5jbG9zZSk7XG5cdFx0cmV0dXJuICRlbDtcblx0fSxcblxuXHRzaG93TW9kYWw6IGZ1bmN0aW9uKHZpZXcpe1xuXHRcdHZpZXcub24oJ2Nsb3NlJywgdGhpcy5oaWRlTW9kYWwsIHRoaXMpO1xuXHRcdHRoaXMuJGVsLm1vZGFsKCdzaG93Jyk7XG5cdH0sXG5cblx0aGlkZU1vZGFsOiBmdW5jdGlvbigpe1xuXHRcdHRoaXMuJGVsLm1vZGFsKCdoaWRlJyk7XG5cdH1cbn0pO1x0IiwibW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLk1hcmlvbmV0dGU7IiwibW9kdWxlLmV4cG9ydHMgPSBfOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRsYXlvdXRzOiB7XG5cdFx0J3JvbGUnOiBbXG5cdFx0XHQnPGEgY2xhc3M9XCJhY2NvcmRpb24taGVhZFwiIHRhYmluZGV4PVwiMFwiPicsXG5cdFx0XHRcdCc8JT1yb2xlJT4nLFxuXHRcdFx0JzwvYT4nLFxuXHRcdFx0JzxkaXYgY2xhc3M9XCJyb2xlLXJlcXVlc3RzXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9kaXY+J1xuXHRcdF0uam9pbignXFxuJylcblx0XHRcblx0fSxcblxuXHR0ZW1wbGF0ZXM6IHtcblx0XHQnZm9ybS1yZXF1ZXN0JzogW1xuXHRcdFx0JzxhIGhyZWY9XCIjXCIgc3R5bGU9XCJkaXNwbGF5OmJsb2NrO1wiPio8JT1uYW1lJT48L2E+J1xuXHRcdF0uam9pbignXFxuJyksXG5cblx0XHQnZm9ybS1BJzogW1xuXHRcdFx0JzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj4nLFxuXHRcdFx0ICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPicsXG5cdFx0XHQgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPicsXG5cdFx0XHQgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+Jyxcblx0XHRcdCAgICAgICAgJzxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJteU1vZGFsTGFiZWxcIj48JT1uYW1lJT48L2g0PicsXG5cdFx0XHQgICAgICAnPC9kaXY+Jyxcblx0XHRcdCAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPicsXG5cdFx0XHQgICAgICAnPGZvcm0+Jyxcblx0XHRcdCAgICAgICAgICAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nLFxuXHRcdFx0ICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJyZWNpcGllbnQtbmFtZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlJlY2lwaWVudDo8L2xhYmVsPicsXG5cdFx0XHQgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInJlY2lwaWVudC1uYW1lXCI+Jyxcblx0XHRcdCAgICAgICAgICAnPC9kaXY+Jyxcblx0XHRcdCAgICAgICAgICAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nLFxuXHRcdFx0ICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJyZWNpcGllbnQtZW1haWxcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5FbWFpbDo8L2xhYmVsPicsXG5cdFx0XHQgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInJlY2lwaWVudC1lbWFpbFwiPicsXG5cdFx0XHQgICAgICAgICAgJzwvZGl2PicsXG5cdFx0XHQgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+Jyxcblx0XHRcdCAgICAgICAgICAgICc8bGFiZWwgZm9yPVwibWVzc2FnZS10ZXh0XCIgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+TWVzc2FnZTo8L2xhYmVsPicsXG5cdFx0XHQgICAgICAgICAgICAnPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtZXNzYWdlLXRleHRcIj48L3RleHRhcmVhPicsXG5cdFx0XHQgICAgICAgICAgJzwvZGl2PicsXG5cdFx0ICAgICAgICAgICc8L2Zvcm0+Jyxcblx0XHRcdCAgICAgICc8L2Rpdj4nLFxuXHRcdFx0ICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nLFxuXHRcdFx0ICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+Jyxcblx0XHRcdCAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHRmcC1zYXZlLWpzXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+Jyxcblx0XHRcdCAgICAgICc8L2Rpdj4nLFxuXHRcdFx0ICAgICc8L2Rpdj4nLFxuXHRcdFx0JzwvZGl2Pidcblx0XHRdLmpvaW4oJ1xcbicpXG5cdH1cbn0iXX0=
