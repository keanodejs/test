var express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.send({'msg' : 'Hello world'});
	// test 33
});


app.listen(process.env.PORT || 3000);