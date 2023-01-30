let n = 3;
let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
// let used = ["tank", "kick", "know"];
function solution(n, words) {
  let used = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (
      !used.includes(words[i]) &&
      words[i][0] === used[used.length - 1][used[used.length - 1].length - 1]
    ) {
      used.push(words[i]);
    } else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }
  return [0, 0];
}
console.log(solution(n, words));
// console.log(used[used.length - 1][used[used.length - 1].length - 1]);
