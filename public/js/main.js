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