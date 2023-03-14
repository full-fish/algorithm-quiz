let places = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
]
//[1, 0, 1, 1, 1] 지키면 1
function solution(places) {
  let result = []
  const dx1 = [0, 1, 0, -1]
  const dy1 = [1, 0, -1, 0]
  const dx2 = [0, 2, 0, -2]
  const dy2 = [2, 0, -2, 0]
  const dx1_1 = [-1, 1, 1 - 1]
  const dy1_1 = [1, 1, -1, -1]
  for (let place = 0; place < places.length; place++) {
    let arr = places[place].map(ele => ele.split(''))
    result.push(a(arr))
  }
  function a(arr) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] === 'P') {
          for (let k = 0; k < 4; k++) {
            const nx1 = i + dx1[k]
            const ny1 = j + dy1[k]
            const nx2 = i + dx2[k]
            const ny2 = j + dy2[k]
            const nx1_1 = i + dx1_1[k]
            const ny1_1 = j + dy1_1[k]
            if (nx1 >= 0 && ny1 >= 0 && nx1 < 5 && ny1 < 5 && arr[nx1][ny1] === 'P') return 0
            if (nx2 >= 0 && ny2 >= 0 && nx2 < 5 && ny2 < 5 && arr[nx2][ny2] === 'P' && arr[nx1][ny1] !== 'X') return 0
            if (nx1_1 >= 0 && ny1_1 >= 0 && nx1_1 < 5 && ny1_1 < 5 && arr[nx1_1][ny1_1] === 'P' && !(arr[i][ny1_1] === 'X' && arr[nx1_1][j] === 'X')) return 0
          }
        }
      }
    }
    return 1
  }
  return result
}
