function solution(arr, n) {
    const len = arr.length
    return arr.map((e, i) => {
        if (len % 2 && !(i % 2)) return e + n
        else if (!(len % 2) && (i % 2)) return e + n
        else return e
    })
}
//! 다른 사람 풀이
const solution = (a, n) => a.map((v, i) => a.length % 2 ^ i % 2 ? v + n : v)