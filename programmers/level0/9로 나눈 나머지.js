function solution(number) {
    return number.split('').reduce((a, c) => a + parseInt(c), 0) % 9
}