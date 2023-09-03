function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let temp_arr1 = arr1[i].toString(2);
    let temp_arr2 = arr2[i].toString(2);

    temp_arr1 = "0".repeat(n - temp_arr1.length) + temp_arr1;
    temp_arr2 = "0".repeat(n - temp_arr2.length) + temp_arr2;

    let answer_arr = "";
    for (let j = 0; j < n; j++) {
      if (temp_arr1[j] == 1 || temp_arr2[j] == 1) {
        answer_arr += "#";
      } else {
        answer_arr += " ";
      }
    }
    answer.push(answer_arr);
  }
  return answer;
}
