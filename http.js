const http = require ('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end ('Welcome To our homepage');
    }
    if (req.url === '/about') {
        res.end ('Here is our short history');
    }
    res.end (`
        <h1> OOPS!</h1>
         <p> oops </p>
        `
    )
})

server.listen(5000);