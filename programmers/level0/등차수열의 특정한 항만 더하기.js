function solution(a, d, included) {
    let result = 0
    included.forEach((e) => {
        if (e) result += a
        a += d
    })
    return result
}