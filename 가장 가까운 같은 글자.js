function solution(s) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      answer.push(-1);
      stack.push(s[i]);
    } else if (stack.includes(s[i])) {
      answer.push(i - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
    }
  }
  return answer;
}

console.log(solution("banana"));
