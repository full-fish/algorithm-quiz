function solution(my_string) {
    let arr = Array.from({ length: 52 }).fill(0)
    for (let c of my_string) {
        c.charCodeAt() <= 90 ? arr[c.charCodeAt() - 65]++ : arr[c.charCodeAt() - 71]++
    }
    return arr
}