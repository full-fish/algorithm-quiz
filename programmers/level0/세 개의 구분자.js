function solution(myStr) {
    let arr = myStr.split(/a|b|c/).filter((e) => e)
    return arr.length ? arr : ["EMPTY"]
}