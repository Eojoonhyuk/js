function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s.slice(mid, mid + 1) : s.slice(mid - 1, mid + 1);
}
