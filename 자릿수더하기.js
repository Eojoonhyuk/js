const solution = (n) => {
    var answer = 0;
    var num = String(n);
    for(let i = 0; i < num.length; i++){
        answer += parseInt(num[i]);
    }
    return answer;
}

solution(1234);