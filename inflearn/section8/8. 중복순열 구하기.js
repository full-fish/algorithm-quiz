let num = 15
let len = 6

function solution1(num, len) {
  let result = []
  let arr = [...Array(num).keys()].map(e => e + 1)
  function DSF(N, tempArr) {
    if (N === 0) {
      return result.push(tempArr)
    }
    for (let i = 0; i < arr.length; i++) {
      DSF(N - 1, tempArr.concat(arr[i]))
    }
  }
  DSF(len, [])
  return result
}
//! 레퍼런스 이게 push안쓰고 배열의 요소값만 바꾼거라 2배빠름
function solution2(n, m) {
  let answer = []
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i
        DFS(L + 1)
      }
    }
  }

  DFS(0)
  return answer
}
