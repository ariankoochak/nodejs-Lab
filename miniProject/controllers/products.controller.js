const { findProducts, findProductById } = require("../models/products.model");

async function getProducts(req,res){
    try {
        const products = await findProducts();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.write(JSON.stringify({message : 'server error'}));
        res.end();
    }
}

async function getProductById(req,res){
        try {
            const id = req.url.split('/')[3]
            const product = await findProductById(id);
            if(!product){
                res.writeHead(404, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ message: "product not found" }));
                res.end();
            }
            else{
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(product));
                res.end();
            }
        } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ message: "server error" }));
            res.end();
        }
}

const productsControllers = {
    getProducts,
    getProductById
}

module.exports = productsControllers;