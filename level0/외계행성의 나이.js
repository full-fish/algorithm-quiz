function solution(age) {
  return String(age)
    .split('')
    .map((ele) => String.fromCharCode(parseInt(ele) + 97))
    .join('')
}
