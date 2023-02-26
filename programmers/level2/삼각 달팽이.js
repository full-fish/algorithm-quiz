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
