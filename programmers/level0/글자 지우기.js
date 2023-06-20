function solution(my_string, indices) {
    return my_string.split('').filter((e, i) => !(indices.includes(i))).join('')
}