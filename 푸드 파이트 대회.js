function solution(food) {
  let arr = [];
  let result = "";
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < parseInt(food[i] / 2); j++) {
      result += i;
      arr.push(i);
    }
  }
  result =
    result +
    "0" +
    result
      .split("")
      .sort((a, b) => b - a)
      .join("");
  return result;
}
