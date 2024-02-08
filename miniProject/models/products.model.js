const products = require('../data/products.json')

async function findProducts(){
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

async function findProductById(id) {
    return new Promise((resolve, reject) => {
        resolve(products.find((product)=>{
            if(product.id == id){
                return product
            }
        }));
    });
}

const productModel = {
    findProducts,
    findProductById
}

module.exports = productModel;