function solution(todo_list, finished) {
  return todo_list.filter((todo, i) => (todo = finished[i] === false));
}
