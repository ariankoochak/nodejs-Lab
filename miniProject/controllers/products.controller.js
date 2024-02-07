const { findProducts } = require("../models/products.model");

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

const productsControllers = {
    getProducts
}

module.exports = productsControllers;