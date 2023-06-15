function solution(str1, str2) {
    return new RegExp(str1).test(str2) ? 1 : 0
}