const solution = (n) => {
    let answer = 0;
    const N = n.toString();
    for(let i=0; i < N.length; i++){
        answer += parseInt(N[i]);
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}