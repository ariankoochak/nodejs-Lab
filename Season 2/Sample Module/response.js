const generateNumber = ()=>{
    return Math.ceil(Math.random()*10);
}

module.exports = generateNumber; //if require this file(response.js) , return generateNumber