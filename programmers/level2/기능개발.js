// function solution(progresses, speeds) {
//   let result = [];
//   let temp = [];
//   let index = 0;

//   while (temp.length < progresses.length) {
//     let count = 0;
//     for (let i = 0; i < progresses.length; i++) {
//       progresses[i] = progresses[i] + speeds[i];
//       if (progresses[i] >= 100 && !temp.includes(i)) {
//         temp.push(i);
//       }
//     }
//     temp = temp.sort((a, b) => a - b);
//     for (let i = 0; i < temp.length; i++) {
//       if (temp[i] === index) {
//         count++;
//         index++;
//       }
//     }
//     if (count > 0) result.push(count);
//   }
//   return result;
// }
function solution(progresses, speeds) {
  let answer = [0]
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))
  let maxDay = days[0]

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1
    } else {
      maxDay = days[i]
      answer[++j] = 1
    }
  }

  return answer
}
