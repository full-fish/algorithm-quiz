function solution(rank, attendance) {
    let obj = {}
    let possible = []
    rank.forEach((e, i) => obj[e] = { bool: attendance[i], index: i })
    for (let key in obj) {
        if (obj[key].bool) possible.push(obj[key].index)
        if (possible.length === 3) break
    }
    return 10000 * possible[0] + 100 * possible[1] + parseInt(possible[2])
}