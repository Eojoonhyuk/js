const solution = (keymap, targets) => {
    let answer = [];
    targets.forEach(element => {
        let cnt = 0;
        for(let i = 0; i < element.length; i++){
            let min = Infinity;
            for(let j = 0; j < keymap.length; j++){
                let index = keymap[j].indexOf(element[i]);
                if (min > index && index != -1) min = index
            }
            if (min == Infinity) {
                sum = -1
                break;
            } else sum += min + 1;
        }
        answer.push(cnt)
    });    
    
    return answer;
}
