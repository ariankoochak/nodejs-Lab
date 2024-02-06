const http = require('http')
const port = 3000

const server = http.createServer((req,res)=>{
    console.log("request received!");
})

server.listen(port,()=>{
    console.log('\nserver running!!..');
    console.log(`for start,send request to http://localhost:${port}\n`);
})

