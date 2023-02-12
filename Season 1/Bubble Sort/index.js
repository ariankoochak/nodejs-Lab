const myArr = [1,6,3,2,5,7,4,9];

for(let i = 0;i < myArr.length;i++){
    for(let j = 0;j < myArr.length;j++){
        if(myArr[i] < myArr[j]){
            let tmp = myArr[i];
            myArr[i] = myArr[j];
            myArr[j] = tmp;
        }
    }
}

console.log(myArr);


// for run with Node =>                        node index.js
// for run with nodemon =>                     nodemon index.js 
// for run with nodemon in VScode terminal =>  npx nodemon index.js
// for install nodemon Global=>                npm install -g nodemon
// for install nodemon just in project =>      npm install --save-dev nodemon

// for more details for npm & npx : https://roocket.ir/articles/npm-vs-npx-whats-the-difference