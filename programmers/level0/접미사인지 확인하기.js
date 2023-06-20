function solution(my_string, is_suffix) {
    return (my_string.split('').reverse().join('').match(new RegExp(is_suffix.split('').reverse().join('')))?.index ?? 1) ? 0 : 1
}
//! 다른 사람 풀이
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0