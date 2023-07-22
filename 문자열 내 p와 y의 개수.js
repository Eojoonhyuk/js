function solution(s){
    const obj = {};
    const string = s.toUpperCase().split("");
    string.forEach((el) => {
        obj[el] = ++obj[el] || 1
    })
    
    return obj['P'] === obj['Y'] ? true : false;
}