function solution(clothes) {
  let obj = {}
  let result = 1
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i][1] in obj) obj[clothes[i][1]]++
    else obj[clothes[i][1]] = 1
  }
  for (let key in obj) {
    result *= obj[key] + 1
  }
  return result - 1
}
