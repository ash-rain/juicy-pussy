var dnsd = require('dnsd')

exports.main = function () {
	var server = dnsd.createServer(handler);
	var zone = function(zone, server, admin, serial, refresh, retry, expire, ttl) {};
	server.zone('example.com', 'ns1.example.com', 'us@example.com', 'now', '2h', '30m', '2w', '10m')
		.listen(5353, '127.0.0.1');
	console.log('Server running at 127.0.0.1:5353');

	function handler(req, res) {
		console.log('%s:%s/%s %j', req.connection.remoteAddress, req.connection.remotePort, req.connection.type, req)

		var question = res.question[0]
			, hostname = question.name
			, length = hostname.length
			, ttl = Math.floor(Math.random() * 3600)

		if (question.type == 'A') {
			res.answer.push({ name: hostname, type: 'A', data: "1.1.1." + length, 'ttl': ttl })
			res.answer.push({ name: hostname, type: 'A', data: "2.2.2." + length, 'ttl': ttl })
		}
		res.end()
	}
};