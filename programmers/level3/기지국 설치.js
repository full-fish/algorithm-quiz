//! 런타임 에러 -> 배열의 크기가 너무 커서
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

//! 배열 크기 효율적으로 짜서 런타임에러는 안났으나 시간초과
function solution(n, stations, w) {
    let buffer = new ArrayBuffer(n); // Create a buffer of 200,000,000 bytes
    let arr = new Uint8Array(buffer); // Create a view on the buffer
    let count = 0;
    let length = 0;
    let index = 0
    let bool = false
    for (let i = 0; i < arr.length; i++) {
        if (stations[index] - w - 1 <= i && stations[index] + w - 1 >= i) {
            arr[i] = 1
            bool = true
        } else {
            if (bool) {
                bool = false
                index++
            }
        }
        if (arr[i] === 0) length++
        else {
            count += Math.ceil(length / (2 * w + 1));
            length = 0;
        }
    }
    if (length > 0) {
        count += Math.ceil(length / (2 * w + 1));
    }
    else return 0
    return count;
}