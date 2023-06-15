function solution(num_list) {
    let multiply = num_list.reduce((a, c) => a * c)
    let sum = num_list.reduce((a, c) => a + c)
    return multiply < sum ** 2 ? 1 : 0
}