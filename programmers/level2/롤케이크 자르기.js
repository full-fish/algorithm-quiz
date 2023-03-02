let topping = [1, 1, 1, 1, 1, 1, 1, 1, 1]
//! 전체 순회 -> 시간 초과
function solution1(topping) {
  let obj1 = {}
  let obj2 = {}
  let result = 0
  topping.forEach(ele => (ele in obj1 ? obj1[ele]++ : (obj1[ele] = 1)))
  while (topping.length > 0) {
    const cut = topping.pop()
    obj1[cut] > 1 ? obj1[cut]-- : delete obj1[cut]
    cut in obj2 ? obj2[cut]++ : (obj2[cut] = 1)
    if (Object.keys(obj1).length === Object.keys(obj2).length) result++
  }
  return result
}
//! 중간부터 시작하여 좌우로 보다가 아니면 끝
function solution2(topping) {
  let obj1 = {}
  let obj2 = {}
  const len = topping.length
  let p = ~~(len / 2)
  let result = 0
  for (let i = 0; i < p; i++) {
    topping[i] in obj1 ? obj1[topping[i]]++ : (obj1[topping[i]] = 1)
  }
  for (let i = p; i < len; i++) {
    topping[i] in obj2 ? obj2[topping[i]]++ : (obj2[topping[i]] = 1)
  }
  let copyObj1 = {}
  let copyObj2 = {}
  for (let key in obj1) {
    copyObj1[key] = obj1[key]
  }
  for (let key in obj2) {
    copyObj2[key] = obj2[key]
  }
  if (Object.keys(obj1).length === Object.keys(obj2).length) result--
  while (Object.keys(copyObj1).length <= Object.keys(copyObj2).length) {
    if (Object.keys(copyObj1).length === Object.keys(copyObj2).length) result++
    let target = topping[p]
    copyObj2[target] > 1 ? copyObj2[target]-- : delete copyObj2[target]
    target in copyObj1 ? copyObj1[target]++ : (copyObj1[target] = 1)
    p++
  }
  p = ~~(len / 2)
  while (Object.keys(obj1).length >= Object.keys(obj2).length) {
    if (Object.keys(obj1).length === Object.keys(obj2).length) result++
    p--
    let target = topping[p]
    obj1[target] > 1 ? obj1[target]-- : delete obj1[target]
    target in obj2 ? obj2[target]++ : (obj2[target] = 1)
  }
  return result
}
//! solution1에서 Object.keys대신 len을 이용해서 비교한거
function solution3(topping) {
  let obj1 = {}
  let obj2 = {}
  let result = 0
  topping.forEach(ele => (ele in obj1 ? obj1[ele]++ : (obj1[ele] = 1)))
  let len1 = Object.keys(obj1).length
  let len2 = Object.keys(obj2).length
  while (topping.length > 0) {
    const cut = topping.pop()
    if (obj1[cut] > 1) obj1[cut]--
    else {
      delete obj1[cut]
      len1--
    }
    if (cut in obj2) obj2[cut]++
    else {
      len2++
      obj2[cut] = 1
    }
    if (len1 === len2) result++
  }
  return result
}
//! solution2에서 Object.keys대신 len을 이용해서 비교한거 solution3보다 2배정도 빠름
function solution4(topping) {
  let obj1 = {}
  let obj2 = {}
  const len = topping.length
  let p = ~~(len / 2)
  let result = 0
  for (let i = 0; i < p; i++) {
    topping[i] in obj1 ? obj1[topping[i]]++ : (obj1[topping[i]] = 1)
  }
  for (let i = p; i < len; i++) {
    topping[i] in obj2 ? obj2[topping[i]]++ : (obj2[topping[i]] = 1)
  }
  let copyObj1 = {}
  let copyObj2 = {}
  for (let key in obj1) {
    copyObj1[key] = obj1[key]
  }
  for (let key in obj2) {
    copyObj2[key] = obj2[key]
  }
  let len1 = Object.keys(obj1).length
  let len2 = Object.keys(obj2).length
  let copyLen1 = Object.keys(copyObj1).length
  let copyLen2 = Object.keys(copyObj2).length
  if (len1 === len2) result--
  while (copyLen1 <= copyLen2) {
    if (copyLen1 === copyLen2) result++
    let target = topping[p]
    if (copyObj2[target] > 1) copyObj2[target]--
    else {
      delete copyObj2[target]
      copyLen2--
    }
    if (target in copyObj1) copyObj1[target]++
    else {
      copyObj1[target] = 1
      copyLen1++
    }
    p++
  }
  p = ~~(len / 2)
  while (len1 >= len2) {
    if (len1 === len2) result++
    p--
    let target = topping[p]
    if (obj1[target] > 1) obj1[target]--
    else {
      delete obj1[target]
      len1--
    }
    if (target in obj2) obj2[target]++
    else {
      obj2[target] = 1
      len2++
    }
  }
  return result
}
// console.log(solution1(topping))
// console.log(solution2(topping))
// console.log(solution3(topping))
console.log(solution4(topping))
