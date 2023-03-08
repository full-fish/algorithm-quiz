let wallpaper = ['.#...', '..#..', '...#.']
function solution(wallpaper) {
  let lux = Number.MAX_SAFE_INTEGER,
    luy = Number.MAX_SAFE_INTEGER,
    rdx = Number.MIN_SAFE_INTEGER,
    rdy = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === '#') {
        if (lux > i) lux = i
        if (luy > j) luy = j
        if (rdx < i) rdx = i
        if (rdy < j) rdy = j
      }
    }
  }
  return [lux, luy, rdx + 1, rdy + 1]
}
console.log(solution(wallpaper))
