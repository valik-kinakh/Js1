
const http = require('http');
const os = require('os');
const osName = require('os-name');
const path=require('path');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>System information</h1>");
  res.write("Current user: "+os.hostname()+os.EOL);
  res.write("<br>");
  res.write("OS type: "+os.type()+"\r\n");
  res.write("<br>");
  res.write("System work time: "+(os.uptime()/60)+" minutes"+"\r\n");
  res.write("<br>");
  res.write("Current work directory: "+path.dirname('Users/valik_kinah/Desktop/Js/Homework11/Task1 ')+"\r\n");
  res.write("<br>");
  res.write("Server file name: "+path.basename('/Users/valik_kinah/Desktop/Js/Homework11/Task1/main.js')+"\r\n");
  res.write("<br>");
  res.end();
}).listen(5000); 


