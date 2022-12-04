function solution(str1, str2) {
  const regex = new RegExp(str2)
  return regex.test(str1) ? 1 : 2
}
