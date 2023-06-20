function solution(my_string) {
    let result = []
    for (let i = 0; i < my_string.length; i++) {
        result.push(my_string.slice(i))
    }
    return result.sort()
}