const arr = [2, 6, 8, 14];
let sum = 1
const arr2 = [];
for(const x of arr){
    for(let i=1; i <= x; i++){
        if(x%i === 0 && !arr2.includes(i)){
            arr2.push(i);
        }
    }
}


for(const x of arr2){
    sum *= x;
}

console.log(arr2)
console.log(sum)