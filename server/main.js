var juicy_dns = require('../dns/dns');

juicy_dns.main();
console.log('Starting DNS server...');

juicy_dns.on('event', function(args) {
	console.log('[event] DNS: ' + args.toString());
});