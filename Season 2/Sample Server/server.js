const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');
    res.end('hello from text content');
})

server.listen(port,hostname,(req,res)=>{
    console.log("hello");
})