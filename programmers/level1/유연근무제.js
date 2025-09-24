let schedules = [730, 855, 700, 720]
let timelogs = [[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]]
let startday = 1

function solution(schedules, timelogs, startday) {
  let successArr = Array(schedules.length).fill(true)
  let schedulesAdd10 = schedules.map(ele => {
    return ele % 100 >= 50 ? ele + 50 : ele + 10
  })
  for (let i = 0; i < timelogs.length; i++) {
    if (!successArr[i]) break
    for (let j = 0; j < timelogs[i].length; j++) { 
      if (startday > 5) {
        startday++
        if (startday > 7) startday = 1
        continue
      }
      if (schedulesAdd10[i] < timelogs[i][j]) {
        successArr[i] = false
      }
      startday++
    }
  }
  return successArr.reduce((a, c) => a + (c ? 1 : 0), 0)
}
console.log(solution(schedules, timelogs, startday));
