//! 시간초과
function solution(players, callings) {
    callings.forEach((e) => {
        const index = players.indexOf(e);
        [players[index], players[index - 1]] = [players[index - 1], players[index]]
    })
    return players
}