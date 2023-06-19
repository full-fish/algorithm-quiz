function solution(myString) {
    let result = ''
    for (let c of myString) {
        result += c === 'a' ? c.toUpperCase() : c !== 'A' ? c.toLowerCase() : c
    }
    return result
}