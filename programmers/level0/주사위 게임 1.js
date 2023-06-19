function solution(a, b) {
    let isOddA = a % 2
    let isOddB = b % 2
    if (isOddA && isOddB) return a ** 2 + b ** 2
    else if (isOddA + isOddB === 1) return 2 * (a + b)
    else return Math.abs(a - b)
}