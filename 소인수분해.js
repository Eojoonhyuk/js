function solution(n) {
  let answer = [];
  let d = 2;
  while (n >= 2) {
    if (n % d === 0) {
      answer.push(d);
      n = n / d;
    } else {
      d++;
    }
  }
  return [...new Set(answer)];
}
