const http = require('http');
const dt = require('./personalmodule');
const os = require('os');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Data of request: " +dt.myDateTime());
  res.write("<br>");
  res.write(dt.greeting()+os.hostname());
  res.end();
}).listen(8080);