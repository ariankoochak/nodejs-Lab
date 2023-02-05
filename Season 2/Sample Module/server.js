const http = require('http');
const randomNumber = require('./response');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');
    res.end(`your random number : ${randomNumber()}`);
});

server.listen(port,hostname,(req,res)=>{
    console.log("server is running");
})