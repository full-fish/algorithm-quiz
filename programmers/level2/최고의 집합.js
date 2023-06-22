function solution(n, s) {
    let ceil = ~~(s / n)
    let sub = s - (ceil * n)
    if (n > s) return [-1]
    return Array.from({ length: n - sub }).fill(ceil).concat(Array.from({ length: sub }).fill(ceil + 1))
}