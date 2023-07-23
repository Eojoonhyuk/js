const solution = (n, words) => {
    let answer = [0, 0];
    for(let i=1; i < words.length; i++){
        if(words[i-1].slice(-1) !== words[i].slice(0, 1) || words.indexOf(words[i]) != i){
            answer[0] = i % n + 1;
            answer[1] = parseInt(i/n +1);
            break;
        }
    }
    return answer;
}
