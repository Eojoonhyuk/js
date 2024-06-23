function solution(s) {
  let answer = "";

  for (let k of s) {
    if (s.split(k).length === 2) {
      answer += k;
    }
  }

  return [...answer].sort().join("");
}
