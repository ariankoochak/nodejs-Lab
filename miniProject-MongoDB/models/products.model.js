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

async function updateProductById(id,payload){
    const db = await new mongoDBconnection().getDBtunnel("users");
    let result = await db.updateOne({ _id: new ObjectId(id) },{
        $set : payload
    });
    console.log(result);
    return new Promise((resolve,reject)=>{
        resolve(result)
    })
}

async function deleteProductById(id){
    const db = await new mongoDBconnection().getDBtunnel("users");
    let result = await db.deleteOne({ _id: new ObjectId(id)});
    return new Promise((resolve, reject) => {
        resolve(result);
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