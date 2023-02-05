const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log("server its up");
})

server.listen(port,hostname,(req,res)=>{
    console.log("hello");
})