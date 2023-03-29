function solution(name) {
  const obj = {}
  let result = 0
  let indexArr = []
  let plus = 0
  for (let i = 65; i <= 90; i++) {
    const key = String.fromCharCode(i)
    const value = i - 65
    obj[key] = value
  }
  for (let i = 0; i < name.length; i++) {
    if (name[i] === 'A') indexArr.push(i)
    else if (name[i] <= 'N') result += obj[name[i]]
    else result += 26 - obj[name[i]]
  }
  if (indexArr.length === 0) plus = name.length - 1
  else {
    const first = indexArr[0]
    const last = name.length - indexArr[indexArr.length - 1]
    plus = Math.min(first, last)
    // if (first < last) plus = first
    // else if (first > last) plus = last
    // else plus = Math.min(first, last)
  }
  return result + plus
}
