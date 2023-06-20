function solution(intStrs, k, s, l) {
    let result = []
    intStrs.forEach((e) => {
        const num = parseInt(e.slice(s, s + l))
        if (num > k) result.push(num)
    })
    return result
}