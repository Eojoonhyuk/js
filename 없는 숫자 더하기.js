function solution(numbers) {
  return numbers.sort((a, b) => a - b).reduce((acc, cur) => acc - cur, 45);
}
