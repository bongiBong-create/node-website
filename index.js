const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");

http
  .createServer(function (req, res) {
    renderPage(req.url, res)
  }).listen(8080)

const renderPage = (url, res) => {
  switch (url) {
    case "/":
      fs.readFile("index.html", function (err, data) {
        if (err) return res.end("404 not found")
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(data);
        res.end();
      })
      break;

    case "/contact-me":
      fs.readFile("contact-me.html", function (err, data) {
        if (err) return res.end("404 not found")
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(data);
        res.end();
      })
      break;

    case "/about":
      fs.readFile("about.html", function (err, data) {
        if (err) return res.end("404 not found")
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(data);
        res.end();
      })
      break;

    case "/404":
      fs.readFile("404.html", function (err, data) {
        if (err) return res.end("404 not found")
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(data);
        res.end();
      })
      break;
  }
}