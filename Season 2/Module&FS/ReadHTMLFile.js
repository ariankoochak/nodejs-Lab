const ReadFileSystem = require('fs');

const ReadHTML = (path)=>{
    return ReadFileSystem.readFileSync(path);
}

module.exports = ReadHTML;



// or:
// const { readFileSync } = require('fs');

// const ReadHTML = (path) => {
//     return readFileSync(path);
// }

// module.exports = ReadHTML;