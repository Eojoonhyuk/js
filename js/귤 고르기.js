function solution(k, tangerine) {
    const obj = {};
    tangerine.forEach((el) => {
        obj[el] = ++obj[el] || 1
    })
    
    const arr = Object.values(obj).sort((a, b) => b - a);
    
    let count = 0
    for(let i = 0; i < arr.length; i++){
        count += arr[i];
        
        if(count >= k){
            return i ? i + 1 : 1 
        } 
    }
}