function solution(players, callings) {
    let obj = {}
    players.forEach((e, i) => obj[e] = i)
    callings.forEach((e) => {
        const index = obj[e];
        obj[players[index - 1]]++
        obj[e]--
        [players[index], players[index - 1]] = [players[index - 1], players[index]]
    })
    return players
}