// Import HTTP Functionality

import http from "node:http";
import fs from "node:fs";

// Create the server object

const routes = {
  "/": "index.html",
  "styles.css": "css/styles.css",
  'app.js': 'js/app.js',
  "favicon.ico": "favicon.ico",
  "product.jpg": "images/product.jpg",
};

const server = http.createServer((req, res) => {
  // ROUTER
  if (routes[req.url]) {
    fs.readFile(routes[req.url], (err, data) => {
      res.write(data)
      res.end()
    });
  } else if (req.url == '/api/product') {
    fs.readFile('data/product.json', (err, dataJSON) => {
      res.write(dataJSON)
      res.end()
    })
  } else if (req.url == '/api/order') {
    fs.writeFile('data/order.json', "{}", (err) => {
      res.write(JSON.stringify({
        message: 'order placed!'
      }))
      res.end()
    })
  } else {
    res.write('not found')
    res.end()
  }
});

// Start the server

server.listen(8888)