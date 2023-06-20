function solution(arr) {
    let power = [1, 2]
    let num = 2
    let index = -1
    let len = arr.length
    while (num <= 1000) {
        num *= 2
        power.push(num)
    }
    for (let i = 0; i < power.length; i++) {
        if (power[i] >= len) {
            index = i
            break
        }
    }
    while (len !== power[index]) {
        arr.push(0)
        len++
    }
    return arr
}
//! 다른 사람 풀이
function solution(arr) {
    const length = arr.length;
    const totalLength = 2 ** Math.ceil(Math.log2(length));
    return [...arr, ...new Array(totalLength - length).fill(0)];
}