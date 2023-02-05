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