const solution = (s) => {
    let answer = [0, 0];
    while(s.length > 1){
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/[^(1-9)]/gi,"").length.toString(2);
    }
    return answer;
}

solution("110010101001");


