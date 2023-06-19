function solution(num_list) {
    return Math.max(num_list.reduce((a, c, i) => i % 2 ? a + c : a, 0), num_list.reduce((a, c, i) => !(i % 2) ? a + c : a, 0))
}