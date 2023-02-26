let operations = ['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']
function solution(operations) {
  let q = []
  let maxNum = []
  let minNum = []
  let maxIndex = [0]
  let minIndex = [0]
  operations.forEach(ele => {
    let [, a, n] = [...ele.match(/([A-Z]) (-*\d+)/)]
    n = Number(n)
    if (a === 'I') {
      q.push(n)
      if (n > maxNum[0]) {
        maxNum.unshift(n)
        maxIndex.unshift(q.length - 1)
      } else if (n < minNum[0]) {
        minNum.unshift(n)
        minIndex.unshift(q.length - 1)
      }
    } else if (n === 1) {
      q.splice(maxIndex.shift(), 1)
      maxNum.shift()
    } else {
      q.splice(minIndex.shift(), 1)
      minNum.shift()
    }
  })
  return q.length ? [maxNum[0], minNum[0]] : [0, 0]
}

console.log(solution(operations))
