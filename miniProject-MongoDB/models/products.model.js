const products = ""
const productsPath = ""
const fs = require('fs');
const mongoDBconnection = require('../data/singleton');
const { ObjectId } = require('mongodb');

async function findProducts(){
    const db = await new mongoDBconnection().getDBtunnel("users");
    let result = await db.find({}).toArray();
    return new Promise((resolve, reject) => {
        resolve(result)
    })
}

async function findProductById(id) {
    const db = await new mongoDBconnection().getDBtunnel("users");
    let result = await db.find({_id : new ObjectId(id)}).toArray();
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}
async function addProduct(product) {
    const db = await new mongoDBconnection().getDBtunnel("users");
    const result = await db.insertOne(product);
    return new Promise((resolve, reject) => {
        resolve(result.acknowledged);
    });
}
//TODO: add mongoDB
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
//TODO: add mongoDBs
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