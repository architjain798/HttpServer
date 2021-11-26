let http = require("http");

let server = http.createServer((req, res) => {
  //res.writeHead(200, { "content-type": "text" }); //to define what type of content is sending to browser
  res.write("Hello World Archit");
  console.log(req);
  res.end(); //to make the end to response
});

server.listen(8080);
console.log("server is working");
