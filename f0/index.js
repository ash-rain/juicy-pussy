var kad = require('kad');
var KadLocalStorage = require('kad-localStorage');
var quasar = require('kad-quasar');
var topics = new quasar.Protocol(router);
var seed = { address: '127.0.0.1', port: 1338 };
var dht = new kad.Node({
  transport: kad.transports.UDP(kad.contacts.AddressPortContact({ address: '127.0.0.1', port: 1337 })),
  storage: new KadLocalStorage('label')
});

dht.connect(seed, function(err) { console.log(err); });

topics.subscribe('beep', function(content) { console.log(content); });
topics.publish('beep', { message: 'boop' });
