function solution(num_str) {
    return num_str.split('').reduce((a, c) => a + parseInt(c), 0)
}