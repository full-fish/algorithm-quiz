function solution(my_string, index_list) {
    let result = ''
    index_list.forEach((e) => result += my_string[e])
    return result
}