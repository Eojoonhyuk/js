const solution = (n) => {
    var answer = 0;
    answer = (n % 7) === 0 ? parseInt(n / 7) : parseInt((n / 7) + 1);
    return answer;
}

solution(7);