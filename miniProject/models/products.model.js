const products = require('../data/products.json')

async function findProducts(){
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

const productModel = {
    findProducts,
}

module.exports = productModel;