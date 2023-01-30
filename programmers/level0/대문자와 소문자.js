function solution(my_string) {
  let result = ''
  for (let i = 0; i < my_string.length; i++) {
    let unicode = my_string[i].charCodeAt()
    unicode <= 90 ? (unicode += 32) : (unicode -= 32)
    result += String.fromCharCode(unicode)
  }
  return result
}
