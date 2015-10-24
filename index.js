var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
app.use(cookieParser());


var counter = 1337;
var map = {};

app.get('/a', function (req, res) {
	res.sendFile(path.join(__dirname, 'a.html'));
});
app.get('/b', function (req, res) {
	res.sendFile(path.join(__dirname, 'b.html'));
});

app.get('/cookie', function (req, res) {
	console.log(req.cookies);
	var id = Object.keys(req.cookies)[0];
	if (!id)
		id = counter++;
	
	if(!map[id])
		map[id]={};
	var ref = req.get('Referrer');
	if(!map[id][ref])
		map[id][ref]=1;
	else
		map[id][ref]++;
	res.cookie(id, 'true');
	res.sendFile(path.join(__dirname, 'img.jpg'));

});

app.get('/history', function(req,res){
	res.send(map);
});

var server = app.listen(3000, function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Example app listening at http://%s:%s', host, port);
	});
