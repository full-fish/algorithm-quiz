let a = [11, 7, 5, 6, 10, 9]
let b = [3, 5, 1, 2] // 1 3 5 2
function solution1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let aux = i - 1
    while (aux >= 0 && arr[aux] > temp) {
      arr[aux + 1] = arr[aux]
      aux--
    }
    arr[aux + 1] = temp
  }
  return arr
}
//! 레퍼런스
function solution2(arr) {
  let answer = arr
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j]
      else break
    }
    arr[j + 1] = tmp
  }
  return answer
}
function solution3(arr) {
  // 0번째 부분은 정렬된거로 침
  let sortedArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    // 삽입할 요소가 정렬된 요소의 가장 큰 수보다 크다면 그냥 push
    if (arr[i] >= sortedArr[i - 1]) {
      sortedArr.push(arr[i])
    } else {
      for (let j = 0; j < sortedArr.length; j++) {
        // 삽입할 요소가 정렬된 부분의 어떠한 요소보다 작을 때 그 부분에 삽입
        if (arr[i] <= sortedArr[j]) {
          const left = sortedArr.slice(0, j)
          const right = sortedArr.slice(j)
          sortedArr = left.concat(arr[i], right)
          break
        }
      }
    }
  }
  return sortedArr
}
//! 레퍼런스
function solution4(arr) {
  let answer = []
  answer.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i])
        break
      }
    }
  }
  return answer
}
