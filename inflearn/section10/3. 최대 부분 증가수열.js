// let arr = [5, 3, 7, 8, 6, 2, 9, 4]
let arr2 = [...Array(20000).keys()].map(e => e + 1)
arr2 = arr2.reverse()
function solution1(arr) {
  let ch = new Array(arr.length).fill(0)
  ch[0] = 1
  for (let i = 1; i < arr.length; i++) {
    let preArr = arr.slice(0, i)
    const preArrFiltered = preArr.filter(ele => ele < arr[i])
    const underBig = preArrFiltered.length ? Math.max(...preArrFiltered) : false
    underBig ? (ch[i] = ch[preArr.indexOf(underBig)] + 1) : (ch[i] = 1)
  }
  return Math.max(...ch)
}
//! 레퍼런스 그냥 전체 순회하면서 max 다 비교하는데 slice가 없어서 더 빠름
function solution2(arr) {
  let answer = 0
  let dy = Array.from({ length: arr.length }, () => 0)
  dy[0] = 1
  for (let i = 1; i < arr.length; i++) {
    let max = 0
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j]
      }
    }
    dy[i] = max + 1
    answer = Math.max(answer, dy[i])
  }
  return answer
}
