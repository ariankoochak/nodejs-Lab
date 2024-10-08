const names = ["Arian", "Behrad", "Salar", "Yekta", "Amir", "MohammadHossein"];

const solve1 = (arr)=> {
    return arr.join("").length;
}

const solve2 = (arr)=> {
    arr.push(0);
    for (const ind of arr) {
        if (typeof ind === "string") {
            arr[arr.length - 1] += ind.length;
        }
    }
    return arr[arr.length - 1];
}

console.log(solve1(names));

console.log(solve2(names));
