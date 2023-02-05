const http = require('http');
const FileSystem = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    FileSystem.readFile('./mainPage.html',(err,data)=>{
        if(err) 
            res.end("ERROR IN READ FILE")
        else 
            res.end(data);
    })
});

server.listen(port,hostname,(req,res)=>{
    console.log("server is running");
})