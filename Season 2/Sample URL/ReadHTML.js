const ReadFiles = require('fs');

const readHTML = (path)=>{
    return ReadFiles.readFileSync(path);
}

module.exports = readHTML;