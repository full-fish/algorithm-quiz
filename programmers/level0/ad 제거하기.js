function solution(strArr) {
    return strArr.filter((e) => !(/ad/.test(e)))
}