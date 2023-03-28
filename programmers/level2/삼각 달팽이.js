//! 처음에 못푼거
function solution(n) {
  let arr = [...Array(n).keys()].map(ele => new Array(ele + 1).fill(0))
  let num = 1
  let ut = 0
  let dt = n
  let rt = 0
  let lt = 0
  let t = 0
  let v = 'down'
  while (num < 21) {
    if (v === 'down') {
      console.log('if')
      for (let i = ut; i < dt; i++) {
        if (num > 21) console.log(arr)
        if (i !== dt - 1) {
          arr[i][lt] = num
          num++
        } else {
          ut++
          dt--
          for (let j = lt; j < arr[i].length - rt; j++) {
            if (num > 21) console.log(arr)
            // console.log(i, j, num)
            arr[i][j] = num
            num++
            // console.log(arr)
            if (j === arr[i].length - 1 - rt) {
              v = 'up'
              lt++
              rt++
            }
          }
        }
      }
    } else {
      for (let i = arr.length - 1 - ut; i >= ut; i--) {
        if (num > 21) console.log(arr)
        arr[i][arr[i].length - 1 - t] = num
        num++
        if (i === ut) {
          v = 'down'
          t++
          ut++
        }
      }
    }
  }
  console.log(arr)
}
console.log(solution(6))

//! 푼거
function solution2(n) {
  if (n === 1) return [1]
  let arr = Array.from({ length: n }, () => Array.from({ length: 0 }))
  let num = 1
  let hP = 0
  let vP = 0
  while (num <= (n * (n + 1)) / 2) {
    while (vP < arr.length - hP - 1 && arr[vP].length < vP + 1) {
      const cur = arr[vP]
      if (hP === 0) arr[vP].push(num)
      else arr[vP] = cur.slice(0, hP).concat(num).concat(cur.slice(hP))
      num++
      vP++
    }
    let temp = []
    while (arr[vP].length + temp.length < vP + 1) {
      temp.push(num)
      num++
    }
    arr[vP] = arr[vP].slice(0, hP).concat(temp).concat(arr[vP].slice(hP))
    vP--
    while (arr[vP].length < vP + 1) {
      const cur = arr[vP]
      if (hP === 0) arr[vP].push(num)
      else
        arr[vP] = cur
          .slice(0, cur.length - hP)
          .concat(num)
          .concat(cur.slice(-hP))
      vP--
      num++
    }
    vP++
    vP++
    hP++
  }
  return arr.flat()
}

//! 다른사람 코드
function solution2(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill())
  console.log(a)
  let row = -1
  let col = 0
  let fill = 0
  for (let i = n; i > 0; i -= 3) {
    a[++row][col] = ++fill
    for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
  }
  return a.flat()
}
