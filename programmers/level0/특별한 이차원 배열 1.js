function solution(n) {
    return Array.from({ length: n }, () => Array(n).fill(0)).map((e, i) => e.map((e, j) => i === j ? 1 : e))
}