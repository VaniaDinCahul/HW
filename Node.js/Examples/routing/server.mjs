import http from 'node:http'
import fs from 'node:fs'


const routes = {
  "/": "index.html",
  "styles.css": "css/styles.css",
  "favicon.ico": "favicon.ico",
  "product.jpg": "images/product.jpg"
};


const server = http.createServer((req, res) => {
    // ROUTER
    if (routes[req.url]) {
        fs.readFile(routes[req.url], (err, data) => {
            // 1. React only for the main page
            if (routes[req.url] == 'index.html') {
                // L2. Load the product from Json

                fs.readFile('data/product.json', (err, dataJSON) => {
                    let productData = JSON.parse(dataJSON);

                    // 3. Replace Data
                    data = data.toString()
                    data = data.replace('{title}', productData['title'])
                    data = data.replace("{image}", productData["image"]);
                    data = data.replace("{subtitle}", productData["subtitle"]);
                    data = data.replace("{description}", productData["description"]);
                    data = data.replace("{priceAmount}", productData["price"]["amount"]);
                    data = data.replace("{priceCurrency}", productData["price"]["currency"]);
                
                    let tagHolder = data.getElementById("tag-list");
                    let ul = data.createElement("ul");
                    data.appendChild(ul)
                    let li
                    

                    productData['tags'].forEach(tag => {
                        li = data.createElement("li");
                        li.innerText = tag
                        ul.appendChild(li)
                        
                    });


                    res.write(data)
                    res.end()
                }) 
            } else {
                res.write(data);
                res.end()
            }
        })
    }
})

server.listen(8888)
