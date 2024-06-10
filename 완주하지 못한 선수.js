function solution(participant, completion) {
  const hash = [];

  participant.forEach((el) => {
    hash[el] = hash[el] ? hash[el] + 1 : 1;
  });

  completion.forEach((el) => {
    hash[el] = hash[el] - 1;
  });

  for (let key in hash) {
    if (hash[key] >= 1) return key;
  }
}
