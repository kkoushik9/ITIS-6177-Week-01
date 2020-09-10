var http = require("http");

function hello(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World");
  response.end();
}

http.createServer(hello).listen(8080);
