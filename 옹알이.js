const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

function solution(babbling) {
  const voca = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  babbling.forEach((bab) => {
    voca.forEach((word) => {
      if (bab.includes(word.repeat(2))) {
        return;
      }
      bab = bab.split(word).join(" ");
    });
    if (bab.split(" ").join("").length === 0) {
      answer++;
    }
  });

  return answer;
}

console.log(solution(babbling));
