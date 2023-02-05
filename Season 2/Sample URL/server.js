const http = require('http');
const url = require('url');
const readHTML = require('./ReadHTML');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    const urlParsed = url.parse(req.url);
    let expFile;
    if(urlParsed.pathname === '/info')
        expFile = readHTML('./infoPage.html');
    else
        expFile = readHTML('./mainPage.html');
    res.end(expFile);
})

server.listen(port,hostname,(req,res)=>{
    console.log("server is running");
})