var express = require('express');
var app = express();

app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3001, function () {
	console.log('Listening on port 3001.');
});