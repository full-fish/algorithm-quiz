function solution(myString, pat) {
    return new RegExp(pat).test(myString.split('').map((e) => e === 'A' ? 'B' : 'A').join('')) ? 1 : 0
}