var app = require('./app');
var http = require('http');


app.set('port', process.env.PORT || '3005');
http.createServer(app).listen(app.get('port'), function(){
		console.log('listening on Port', app.get('port'));
	});

