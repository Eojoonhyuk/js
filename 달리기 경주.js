const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  const map = new Map();

  players.forEach((player, i) => {
    map.set(player, i);
  });

  callings.forEach((player) => {
    const curPlayerIndex = map.get(player);
    const frontPlayer = players[curPlayerIndex - 1];

    [players[curPlayerIndex], players[curPlayerIndex - 1]] = [
      players[curPlayerIndex - 1],
      players[curPlayerIndex],
    ];

    map.set(player, map.get(player) - 1);
    map.set(frontPlayer, map.get(player) + 1);
  });

  return players;
}

console.log(solution(players, callings));
