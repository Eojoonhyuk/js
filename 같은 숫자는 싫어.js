function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

function solution(arr) {
  return arr.filter((num, idx) => num !== arr[idx + 1]);
}
