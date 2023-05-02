function solution(x, n) {
    var answer = new Array(n).fill(0);
    answer[0] = x
    for(let i=1; i < n; i++){
        answer[i] = answer[i-1] + x 
    }
    return answer;
}
