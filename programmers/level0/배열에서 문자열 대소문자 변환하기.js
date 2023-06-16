function solution(strArr) {
    return strArr.map((e, i) => i % 2 ? e.toUpperCase() : e.toLowerCase())
}