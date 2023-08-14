function solution(s) {
  let arr = s.split(" ");
  let word = "";

  let answer = arr
    .map((a) => {
      word = a.split("");
      return word
        .map((w, i) => {
          if (i % 2) {
            return w.toLowerCase();
          } else {
            return w.toUpperCase();
          }
        })
        .join("");
    })
    .join(" ");

  return answer;
}
