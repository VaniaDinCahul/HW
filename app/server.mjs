// Import HTTP Functionality

import http from "node:http";

// Create the server object

const server = http.createServer((req, res) => {
    res.write('it Worked')
    res.end()
    console.log('resuqiest')
})

// Start the server

server.listen(8888)