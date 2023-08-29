function solution(k, score) {
  let honorArr = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    honorArr.push(score[i]);
    honorArr.sort((a, b) => b - a);

    if (honorArr.length >= k) {
      answer.push(honorArr[k - 1]);
      continue;
    }

    answer.push(honorArr[honorArr.length - 1]);
  }
  return answer;
}
