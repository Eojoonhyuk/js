const solution = (slice, n) => {
    var answer = 0;
    answer =  (n % slice) === 0 ? parseInt(n / slice) : parseInt((n / slice) + 1);
    return answer;
};