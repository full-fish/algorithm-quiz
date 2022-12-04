function solution(my_string, letter) {
  let result = ''
  for (let i = 0; i < my_string.length; i++) {
    my_string[i] !== letter ? (result += my_string[i]) : ''
  }
  return result
}
