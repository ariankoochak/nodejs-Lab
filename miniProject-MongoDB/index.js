const http = require('http')
const productsControllers = require('./controllers/products.controller')
const errorsHandler = require('./controllers/errors.controller')
const port = 3000

const server = http.createServer((req,res)=>{
    const {url,method} = req;
    const singleProductRegex = /\/api\/products\/[0-9]+/;
    const apiRoute = "/api/products";
    if (url === apiRoute && method === 'GET') {
        productsControllers.getProducts(req,res)
    }
    else if (url.match(singleProductRegex) && method === "GET") {
        productsControllers.getProductById(req, res);
    }
    else if (url.match(singleProductRegex) && method === "DELETE") {
        productsControllers.deleteProduct(req, res);
    }
    else if (url === "/api/products" && method === "POST") {
        productsControllers.createNewProduct(req, res);
    } 
    else if (url.match(singleProductRegex) && method === "PUT") {
        productsControllers.updateProduct(req, res);
    } else {
        errorsHandler.wrongUrlHandler(res);
    }
})

server.listen(port,()=>{
    console.log('\nserver running!!..');
    console.log(`for start,send request to http://localhost:${port}\n`);
})

