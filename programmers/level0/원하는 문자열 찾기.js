function solution(myString, pat) {
    return new RegExp(pat, 'i').test(myString) ? 1 : 0
}