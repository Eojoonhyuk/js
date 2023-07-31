function solution(x) {
  h_num = x
    .toString()
    .split("")
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
  return x % h_num === 0 ? true : false;
}
