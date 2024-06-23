function solution(today, terms, privacies) {
  const answer = [];
  const [todayYear, todayMonth, todayDay] = today.split(".").map((v) => +v);

  const todayDates = todayYear * 12 * 28 + todayMonth * 28 + todayDay;

  const termsHashMap = {};
  terms.forEach((v) => {
    const [term, limit] = v.split(" ");
    termsHashMap[term] = +limit;
  });

  privacies.forEach((v, i) => {
    const [day, limit] = v.split(" ");
    const [privacyYear, privacyMonth, privacyDay] = day
      .split(".")
      .map((v) => +v);

    const privacyDates =
      privacyYear * 12 * 28 +
      privacyMonth * 28 +
      privacyDay +
      termsHashMap[limit] * 28;
    if (privacyDates <= todayDates) answer.push(i + 1);
  });

  return answer;
}
