function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "") {
      answer += " ";
      continue;
    }
    let sASCII = s.charCodeAt(i);
    if (sASCII <= 90) {
      sASCII += n;
      if (sASCII > 90) sASCII -= 26;
    } else {
      sASCII += n;
      if (sASCII > 122) sASCII -= 26;
    }
    answer += String.fromCharCode(sASCII);
  }
  return answer;
}
