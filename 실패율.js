function solution(N, stages) {
  let fail = [];
  let person = stages.length;

  for (let i = 1; i <= N; i++) {
    let num = stages.filter((x) => x === i).length;
    fail.push([i, num / person]);

    person -= num;
  }
  const result = fail.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}
