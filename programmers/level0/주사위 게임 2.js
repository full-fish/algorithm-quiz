function solution(a, b, c) {
    if (a === b && a === c && b === c) return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    else if (a !== b && a !== c && b !== c) return a + b + c
    else return (a + b + c) * ((a ** 2 + b ** 2 + c ** 2))
}