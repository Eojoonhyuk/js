function solution(dots) {
  const [a, b, c, d] = dots;
  let result = 0;
  const s1 = (a[1] - b[1]) / (a[0] - b[0]);
  const s2 = (c[1] - d[1]) / (c[0] - d[0]);

  if (s1 === s2) result = 1;

  const s3 = (a[1] - c[1]) / (a[0] - c[0]);
  const s4 = (b[1] - d[1]) / (b[0] - d[0]);

  if (s3 === s4) result = 1;

  const s5 = (a[1] - d[1]) / (a[0] - d[0]);
  const s6 = (b[1] - c[1]) / (b[0] - c[0]);

  if (s5 === s6) result = 1;

  return result;
}
