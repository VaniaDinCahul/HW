// Import HTTP Functionality

import http from "node:http";
import fs from "node:fs";
import randomUUID from "node:crypto";
import { querystring } from "node:querystring";
import postgres from 'postgres'
import fetch from 'node:fetch'

// Create the server object

const routes = {
  "/": "index.html",
  "styles.css": "css/styles.css",
  "app.js": "js/app.js",
  "favicon.ico": "favicon.ico",
  // "product1.webp": "images/product1.webp",
  // "product2.webp": "images/product2.webp",
  // "product3.webp": "images/product3.webp",
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
    
    sql`SELECT * FROM orders
        WHERE order_pin=${params.pin}
        AND id::varchar LIKE ${params.order_id = '%'}`
    .then (data => {
      res.write(JSON.stringify(data))
      res.end()
    }).catch(err => {
      console.log(err)
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


      console.log(`INSERT INTO orders VALUES {
        ${data.id},
        ${data.orderPIN},
        ${data.orderQuantity},
        ${data.orderPhone},
        ${data.orderEmail},
        ${data.orderId},
      }`);

      sql`INSERT INTO VALUES {
        ${data.id},
        ${data.orderPIN},
        ${data.orderQuantity},
        ${data.orderPhone},
        ${data.orderEmail},
        ${data.orderId},
      }` .then(() => {
        res.write(JSON.stringify({
          message: 'order placed!'
        }))
        res.end()
      }) .catch(err => {
        console.log(err)
      })
    })
    
  } else if (req.url.startsWith == '/api/pay/success') {
    let orderId = req.url.split('/').pop().split('?')[0]
    console.log('Client Paid', orderId)
    
  } else if (req.url.startsWith == '/api/pay') {
    let orderId = req.url.split('/').pop()
    fetch("https://api-m.sandbox.paypal.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        'Accept': `application/json`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`TOKEN : SECRET`).toString('base64')}`
      },
      body: "grant_type=client_credentials",
    }
  ) .then(response => {
    return response.json();
  })
    .then(json => {
      let token = json.access_token

      fetch("https://api-m.sandbox.paypal.com/v2/checkut/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'PayPal-Request-Id': 'ID',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              items: [
                {
                  name: "test Book title",
                  description: "test Description",
                  quantity: 1,
                  unit_amount: {
                    currency_code: "EUR",
                    value: "1.0",
                  },
                },
              ],

              amount: {
                currency_code: "EUR",
                value: "1.00",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "1.00",
                  },
                },
              },
            },
          ],
          application_context: {
            reutrn_url: `http://localhost:8888/api/buy/success/${orderId}`,
            reutrn_url: "http://localhost:8888/api/buy/cancel",
            shipping_preference: "NO_SHIPPING",
            user_action: "PAY_NOW",
          },
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if (json.links);
          let url = json.links.find( link => link.rel === 'approve').href
          res.setHeader('Content-Type', 'text/html')
          res.write(`<meta http-equiv="Refresh" content="0; URL=${url}" />`)
          res.end()
        });
    })
  } else {
    res.write('not found')
    res.end()
  }
});

// Start the server

server.listen(8888)