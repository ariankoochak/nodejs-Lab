const products = require('../data/products.json')
const productsPath = `${process.cwd()}/data/products.json`;
const fs = require('fs');
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

async function addProduct(product) {
    products.push(product)
    return new Promise((resolve, reject) => {
        fs.writeFile(productsPath, JSON.stringify(products), (err) => {
            if (err) {
                console.log(err);
                reject(false);
            }
            resolve(true);
        });
    });
}

async function updateProductById(id,payload){
    return new Promise((resolve,reject)=>{
        products.map((product)=>{
            if(product.id == id){
                Object.assign(product,payload);
            }
            return product
        })
        fs.writeFile(productsPath, JSON.stringify(products), (err) => {
            if (err) {
                console.log(err);
                reject(false);
            }
            resolve(true);
        });
    })
}

async function deleteProductById(id){
    return new Promise((resolve, reject) => {
        console.log(id);
        const newProductList = products.filter((product)=>{
            return product.id != id
        })
        fs.writeFile(productsPath, JSON.stringify(newProductList), (err) => {
            if (err) {
                console.log(err);
                reject(false);
            }
            resolve(true);
        });
    });
}

const productModel = {
    findProducts,
    findProductById,
    addProduct,
    updateProductById,
    deleteProductById
}

module.exports = productModel;