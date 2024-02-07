const http = require('http')
const products = require('./data/products.json')
const productsControllers = require('./controllers/products.controller')
const port = 3000

const server = http.createServer((req,res)=>{
    if (req.url === "/api/products") {
        productsControllers.getProducts(req,res)
    }
    else{
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({message : 'api not found!'}));
        res.end()
    }
})

server.listen(port,()=>{
    console.log('\nserver running!!..');
    console.log(`for start,send request to http://localhost:${port}\n`);
})

