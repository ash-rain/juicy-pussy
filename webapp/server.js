var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Configuration
mongoose.connect('mongodb://localhost/juicy_webapp');
app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Models
var DNSRequest = mongoose.model('DNSQuestion', {
	Question: {
		Name : String,
		Type: String
	},
	Server: {
		Address: String,
		Port: Number,
		Type: String
	},
	Timeout: Number
});

// Routes
app.get('/api/dns/request', function(req, res) {
	DNSRequest.find(function(err, questions) {
		if (err) res.send(err)
		res.json(questions);
	});
});

app.post('/api/dns/request', function(req, res) {
	DNSRequest.create({
		Question: {
			Name: '',
			Type: 'A'
		},
		Server: {
			Address: '',
			Port: 80,
			Type: 'udp'
		},
		Timeout: 1000
	}, function(err, question) {
		if (err) res.send(err);
		DNSRequest.find(function(err, questions) {
			if (err) res.send(err)
			res.json(questions);
		});
	});
});

app.delete('/api/dns/request/:id', function(req, res) {
	DNSRequest.remove({ _id : req.params.id }, function(err, question) {
		if (err) res.send(err);
		DNSRequest.find(function(err, questions) {
			if (err) res.send(err)
			res.json(questions);
		});
	});
});

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// Listen
app.listen(8080);
console.log("Running on http://localhost:8080");