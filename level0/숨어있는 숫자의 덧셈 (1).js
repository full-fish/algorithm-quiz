function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => parseInt(acc) + parseInt(cur))
}
