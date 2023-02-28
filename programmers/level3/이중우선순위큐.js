let operations = ['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333']
function solution(operations) {
  let q = []
  let maxNum = []
  let minNum = []
  let maxIndex = [0]
  let minIndex = [0]
  //   operations.forEach(ele => {
  //     let [, a, n] = [...ele.match(/([A-Z]) (-*\d+)/)]
  //     n = Number(n)
  //     if (a === 'I') {
  //       q.push(n)
  //       if (n > maxNum[0]) {
  //         maxNum.unshift(n)
  //         maxIndex.unshift(q.length - 1)
  //       } else if (n < minNum[0]) {
  //         minNum.unshift(n)
  //         minIndex.unshift(q.length - 1)
  //       }
  //     } else if (n === 1) {
  //       q.splice(maxIndex.shift(), 1)
  //       maxNum.shift()
  //     } else {
  //       q.splice(minIndex.shift(), 1)
  //       minNum.shift()
  //     }
  //   })
  operations.forEach(ele => {
    let [, a, n] = [...ele.match(/([A-Z]) (-*\d+)/)]
    n = Number(n)
    if (a === 'I') {
      q.push(n)
    } else if (n === 1) q.splice(q.indexOf(Math.max(...q)), 1)
    else q.splice(q.indexOf(Math.min(...q)), 1)
  })
  return q.length ? [Math.max(...q), Math.min(...q)] : [0, 0]
}

console.log(solution(operations))
