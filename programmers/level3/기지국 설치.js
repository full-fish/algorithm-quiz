//! 런타임 에러
function solution(n, stations, w) {
    let arr = Array.from({ length: n }).fill(0)
    stations.forEach((e) => {
        for (let i = e - 1 - w; i <= e - 1 + w; i++) {
            if (i >= 0 && i < arr.length) arr[i] = 1
        }
    })
    if (arr.every((e) => e)) return 0
    return arr.join('').split('1').filter((e) => e).map((e) => Math.ceil(e.length / (2 * w + 1))).reduce((a, c) => a + c)
}
console.log(solution(16, [8], 9));


