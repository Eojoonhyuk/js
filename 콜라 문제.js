function solution(a, b, n) {
  let result = 0;
  let remain = n;
  while (true) {
    if (a > remain) {
      break;
    }
    result += parseInt(remain / a) * b;
    remain = parseInt(remain / a) * b + (remain % a);
  }
  return result;
}

console.log(solution(3, 1, 20));
