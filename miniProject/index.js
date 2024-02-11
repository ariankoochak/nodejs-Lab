const http = require('http')
const products = require('./data/products.json')
const productsControllers = require('./controllers/products.controller')
const errorsHandler = require('./controllers/errors.controller')
const port = 3000

const server = http.createServer((req,res)=>{
    if (req.url === "/api/products" && req.method === 'GET') {
        productsControllers.getProducts(req,res)
    }
    else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === "GET") {
        productsControllers.getProductById(req, res);
    }
    else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === "GET") {
        productsControllers.getProductById(req, res);
    }
    else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === "DELETE") {
        productsControllers.deleteProduct(req, res);
    }
    else if (req.url === "/api/product" && req.method === "POST") {
        productsControllers.createNewProdcut(req, res);
    } 
    else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === "PUT") {
        productsControllers.updateProduct(req, res);
    } 
    else {
        errorsHandler.wrongUrlHandler(res);
    }
})

server.listen(port,()=>{
    console.log('\nserver running!!..');
    console.log(`for start,send request to http://localhost:${port}\n`);
})

