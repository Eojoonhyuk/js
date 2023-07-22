function solution(n) {
    let num = Math.sqrt(n)
    if(Number.isInteger(Math.sqrt(n))) return Math.pow(num+1, 2)
    else return -1
}