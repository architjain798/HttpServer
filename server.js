let http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text:html" }); //to define what type of content is sending to browser
  res.write("<h1>Hello World Archit</h1>");
  res.end(); //to make the end to response
});

server.listen(8080);
console.log("server is working");
