function solution(keymap, targets) {
  let obj = {}
  let result = []
  keymap.forEach(ele => {
    for (let c of ele) {
      const index = ele.indexOf(c) + 1
      if (c in obj) {
        if (obj[c] > index) obj[c] = index
      } else obj[c] = index
    }
  })
  targets.forEach(ele => {
    let sum = 0
    for (let c of ele) {
      c in obj ? (sum += obj[c]) : (sum = -1)
    }
    result.push(sum)
  })
  return result
}
