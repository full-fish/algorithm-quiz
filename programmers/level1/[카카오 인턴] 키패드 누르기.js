let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
function solution(numbers, hand) {
  let result = "";
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 0, 11],
  ];
  let nowL = [3, 0];
  let nowR = [3, 2];

  const check = (num, hand) => {
    const findLength = (num, finger) => {
      let numArr = findIndex(num);
      return Math.abs(finger[0] - numArr[0]) + Math.abs(finger[1] - numArr[1]);
    };
    if (num === 1 || num === 4 || num === 7) {
      nowL = findIndex(num);
      return "L";
    } else if (num === 3 || num === 6 || num === 9) {
      nowR = findIndex(num);
      return "R";
    } else {
      if (findLength(num, nowL) > findLength(num, nowR)) {
        nowR = findIndex(num);
        return "R";
      } else if (findLength(num, nowL) < findLength(num, nowR)) {
        nowL = findIndex(num);
        return "L";
      } else {
        if (hand === "right") {
          nowR = findIndex(num);
          return "R";
        } else {
          nowL = findIndex(num);
          return "L";
        }
      }
    }
  };

  const findIndex = (num) => {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].indexOf(num) !== -1) return [i, matrix[i].indexOf(num)];
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    result += check(numbers[i], hand);
  }
  return result;
}

// const check = (num, hand) => {
//   console.log(nowL, nowR);
//   if (num === 1 || num === 4 || num === 7) {
//     nowL = num + 2;
//     return "L";
//   } else if (num === 3 || num === 6 || num === 9) {
//     nowR = num;
//     return "R";
//   } else if (nowR === nowL) {
//     return hand === "right" ? "R" : "L";
//   } else {
//     if (num === 5 && ((nowL === 3 && nowR === 9) || (nowL === 9 && nowR === 3))) {
//       return hand === "right" ? "R" : "L";
//     } else {
//       if (Math.abs(nowR - num) > Math.abs(nowL - num)) return "L";
//       else if (Math.abs(nowR - num) < Math.abs(nowL - num)) return "R";
//       else return hand === "right" ? "R" : "L";
//     }
//   }
// };
// const check = (num, hand) => {
//   console.log(nowL, nowR);
//   if (num === 1 || num === 4 || num === 7) {
//     nowL = num;
//     return "L";
//   } else if (num === 3 || num === 6 || num === 9) {
//     nowR = num;
//     return "R";
//   } else {
//     if (Math.abs(num - nowL) > Math.abs(num - nowR)) {
//       numR = num;
//       return "R";
//     } else if (Math.abs(num - nowL) < Math.abs(num - nowR)) {
//       numL = num;
//       return "L";
//     } else {
//       if (hand === "right") {
//         numR = num;
//         return "R";
//       } else {
//         numL = num;
//         return "L";
//       }
//     }
//   }
// };
//나머지 1이면 왼쪽  이런방법으로
console.log(solution(numbers, hand));
//답 : "LRLLLRLLRRL"
//내 : "LRLLLRLLLRL"
