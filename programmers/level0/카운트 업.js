function solution(start, end) {
    let result = []
    while (end >= start) {
        result.push(start)
        start++
    }
    return result
}