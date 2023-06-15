function solution(a, b, c, d) {
    let obj = {}
    let arr = [a, b, c, d]
    arr.forEach((e) => {
        e in obj ? obj[e]++ : obj[e] = 1
    })
    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]).map((e) => {
        e[0] = parseInt(e[0])
        return e
    })
    const len = entries.length
    if (len === 1) return entries[0][0] * 1111
    else if (len === 2) {
        const one = entries[0][0]
        const two = entries[1][0]
        if (entries[0][1] === 2) { return (one + two) * Math.abs(one - two) }
        else return (10 * one + two) ** 2
    }
    else if (len === 3) {
        return entries[1][0] * entries[2][0]
    }
    else return entries[0][0]
}