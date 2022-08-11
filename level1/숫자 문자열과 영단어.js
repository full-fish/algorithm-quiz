let s = "one4seveneight";
// function solution(s) {
//   const result = s
//     .replace(/zero/g, 0)
//     .replace(/one/g, 1)
//     .replace(/two/g, 2)
//     .replace(/three/g, 3)
//     .replace(/four/g, 4)
//     .replace(/five/g, 5)
//     .replace(/six/g, 6)
//     .replace(/seven/g, 7)
//     .replace(/eight/g, 8)
//     .replace(/nine/g, 9);
//   return Number(result);
// }

function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    // console.log(answer);
  }

  return Number(answer);
}

console.log(solution(s));

console.log("abcd".split("b").join("manseon"));
