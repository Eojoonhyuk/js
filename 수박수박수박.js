function solution(n) {
  return n == 1
    ? "수"
    : n % 2 == 1
    ? "수박".repeat(Math.floor(n / 2)) + "수"
    : "수박".repeat(Math.floor(n / 2));
}
