const http = require('http'); //this module installed with node & use for make server(Line 7)

const hostname = '127.0.0.1'; 
const port = 3000;  
//We want our server to run when sending requests to this IP(hostname) and port(port)

const server = http.createServer((req,res)=>{ //Whenever a request is sent to this server, this function is executed
    res.setHeader('content-type','text/plain');
    res.end('hello from text content');
})

server.listen(port,hostname,(req,res)=>{
    console.log("hello");  
})

