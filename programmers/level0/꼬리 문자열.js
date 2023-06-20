function solution(str_list, ex) {
    return str_list.reduce((a, c) => c.includes(ex) ? a : a + c, '')
}