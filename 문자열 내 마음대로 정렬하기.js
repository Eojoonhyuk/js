function solution(string, n) {
  // 문자열의 크기 비교는 다른 언어와 동일하게 ASCII 값을 비교하여 크기를 결정한다.

  return string.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });
}
