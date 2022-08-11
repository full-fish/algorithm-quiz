let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
let participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion2 = ["josipa", "filipa", "marina", "nikola"];
//! 효율성은 통과못한 코드
// function solution(participant, completion) {
//   for (let i = 0; i < participant.length; i++) {
//     for (let j = 0; j < completion.length; j++) {
//       if (participant[i] === completion[j]) {
//         participant.splice(i, 1);
//         completion.splice(j, 1);
//         i--;
//         j--;
//         break;
//       }
//     }
//   }
//   return participant[0];
// }
//! 더 빠르지만 효울성 통과 못함
// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     if (participant.indexOf(completion[i]) !== -1) {
//       participant.splice(participant.indexOf(completion[i]), 1);
//     }
//   }
//   return participant[0];
// }

function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}
console.log(solution(participant, completion));
