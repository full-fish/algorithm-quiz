function solution(my_strings, parts) {
    let result = ''
    my_strings.forEach((e, i) => result += e.slice(parts[i][0], parts[i][1] + 1))
    return result
}