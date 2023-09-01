function solution(name, yearning, photo) {
  const persons = {};
  name.map((person, i) => (persons[person] = yearning[i]));
  return photo.map((members) =>
    members.reduce((acc, cur) => acc + (persons[cur] || 0), 0)
  );
}
