'use strict';
var Marionette = require('../../shims/marionette');

module.exports = Marionette.AppRouter.extend({
	initialize: function(options){},
	appRoutes: {
		'make_request': 'onMakeRequest'
	}
});