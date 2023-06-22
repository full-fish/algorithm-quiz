//! 시간 초과
function solution(s) {
    let len = s.length
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i + len <= s.length; i++) {
            if (check(s.slice(i, len + i))) return len
        }
        len--
    }
    return -1
}
function check(str) {
    if (str === str.split('').reverse().join('')) return true
    return false
}
//! 푼것
function solution(s) {
    const totalLen = s.length
    let len = s.length
    let reverse = s.split('').reverse().join('')
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j + len <= s.length; j++) {
            if (s.slice(j, len + j) === reverse.slice(totalLen - (len + j), totalLen - j)) return len
        }
        len--
    }
    return -1
}