function solution(arr) {
    let max = Math.max(arr.length, arr[0].length)
    let result = Array.from({ length: max }, () => Array(max).fill(0))
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result[i][j] = arr[i][j]
        }
    }
    return result
}