const cluster = require('cluster');
const http = require('http');

if(cluster.isMaster)
{
  var numReqs = 0;
  setInterval(function()
  {
    console.log('numReqs =', numReqs);
  }, 1000);

  function messageHandler(msg)
  {
    if(msg.cmd && msg.cmd == 'notifyRequest')
      numReqs ++;
  }

  const numCPUs = require('os').cpus().length;
  for(var i = 0; i < numCPUs; i++)
    cluster.fork();
  console.log(numCPUs + ' cores');

  Object.keys(cluster.workers).forEach(function(id)
  {
    cluster.workers[id].on('message', messageHandler);
  });

}
else
{
  http.Server(function(req, res)
  {
    res.writeHead(200);
    res.end('hail satan\n');
    process.send({ cmd: 'notifyRequest' });
  })
  .listen(8000);
}
