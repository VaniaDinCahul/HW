// Import HTTP Functionality

import http from "node:http";
import fs from "node:fs";
import randomUUID from "node:crypto";
import { querystring } from "node:querystring";

// Create the server object

const routes = {
  "/": "index.html",
  "styles.css": "css/styles.css",
  "app.js": "js/app.js",
  "favicon.ico": "favicon.ico",
  "product1.webp": "images/product1.webp",
  "product2.webp": "images/product2.webp",
  "product3.webp": "images/product3.webp",
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
    
  } else if (req.url.startsWith('/api/orderinfo')) {

    let queryString = req.url.split("?")[1]
    let params = querystring.parse(queryString)

    fs.readFile(`data/orders/${params.order_id}.json`, (err, dataJSON) => {
       if (err) {
        res.write("Error Code 910")
       } else {
          let data = JSON.parse(dataJSON);
          if ((data.orderPin = params.pin)) {
            res.write(dataJSON);
          } else {
            res.write("Not authorized!");
          }
          res.end();
       }
    })
  } else if (req.url == '/api/order') {
    let body = ''
    req.on('data', chunk => {
      body += chunk
    })
    req.on('end', () => {
      let data = JSON.parse(body)
      let uuid = randomUUID()
      data.id = uuid
      console.log("!!!!")
      console.log(data)
      console.log("!!!!");
      fs.writeFile(`data/orders/${uuid}.json`, JSON.stringify(data), (err) => {
        res.write(
          JSON.stringify({
            message: "order placed!",
          })
        );
        res.end();
      });
    })
  } else {
    res.write('not found')
    res.end()
  }
});

// Start the server

server.listen(8888)