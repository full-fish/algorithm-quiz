function solution(arr, k) {
    return arr.map((e) => k % 2 ? e * k : e + k)
}