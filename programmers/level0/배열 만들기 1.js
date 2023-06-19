function solution(n, k) {
    let result = []
    for (let i = k; i <= n; i += k) {
        result.push(i)
    }
    return result
}