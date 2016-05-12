var express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.send({'msg' : 'Hello world'});
	// test
});


app.listen(3000);