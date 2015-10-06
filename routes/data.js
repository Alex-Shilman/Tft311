var express = require('express'),
	fs      = require('fs'),
	router  = express.Router();

router.get('/', function(req, res, next){
	var data = JSON.parse(fs.readFileSync("./json/data.json", "utf8"));
	res.send(data);
});

module.exports = router;