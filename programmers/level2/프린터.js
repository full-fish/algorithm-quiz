function solution(priorities, location) {
  let count = 1
  priorities = priorities.map((ele, index) => [index, ele])
  while (true) {
    let max = priorities[0][1]
    for (let i = 1; i < priorities.length; i++) {
      if (max < priorities[i][1]) max = priorities[i][1]
    }
    if (priorities[0][1] >= max) {
      if (priorities[0][0] === location) return count
      priorities.shift()
      count++
    } else {
      priorities.push(priorities.shift())
    }
  }
}
