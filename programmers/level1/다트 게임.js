let dartResult = "1S1S10S#";
function solution(dartResult) {
  let dartResultArr = [...dartResult.match(/(\d*\D*)(\d*\D*)(\d*\D*)/)].slice(1, 4);
  let scoreArr = [];
  for (let i = 0; i < dartResultArr.length; i++) {
    let tempArr = [...dartResultArr[i].match(/(\d*)(\D*)/)].slice(1, 3);
    let area = 0;
    if (tempArr[1].slice(0, 1) === "S") area = 1;
    else if (tempArr[1].slice(0, 1) === "D") area = 2;
    else area = 3;
    scoreArr.push(Math.pow(tempArr[0], area));
    if (tempArr[1].slice(1, 2) === "*") {
      scoreArr[i - 1] *= 2;
      scoreArr[i] *= 2;
    } else if (tempArr[1].slice(1, 2) === "#") {
      scoreArr[i] *= -1;
    }
  }
  return scoreArr.reduce((pre, cur) => pre + cur);
}
console.log(solution2(dartResult));
// console.log(dartResult.match(/(\d.*)(\d.*)(\d.*)/));
// dartResult.match(/(\d.*)(\d.*)(\d.*)/)[1],
//     dartResult.match(/(\d.*)(\d.*)(\d.*)/)[2],
//     dartResult.match(/(\d.*)(\d.*)(\d.*)/)[3],
//

// let arr = [1, 2];
// arr[1] *= 2;
// console.log(arr);
// let arr = ["10S#"];
// console.log([...arr[0].match(/(\d*)(\D*)/)]);
// console.log(dartResult.match(/\d.?\D/g));
function solution2(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D*/g);
  console.log(darts);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    // console.log("split");
    // console.log(split);
    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
