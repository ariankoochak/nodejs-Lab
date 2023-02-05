const http = require('http');
const ReadHTML = require('./ReadHTMLFile');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.end(ReadHTML('./MainPage.html'));
})

server.listen(port,hostname,()=>{
    console.log("server is running")
});