let people = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let limit = 10;
function solution(people, limit) {
  let boat = [];
  let num = 1;
  people = people.sort((a, b) => b - a);
  for (let i = 0; i < people.length; i++) {
    if (people[i] > limit / 2) {
      boat.push([people[i]]);
    } else {
      if (boat[boat.length - num][0] + people[i] <= limit) {
        boat[boat.length - num].push(people[i]);
        num++;
      } else {
        boat.push([people[i]]);
      }
    }
  }
  return boat.length;
}
// console.log(solution(people, limit));
console.log(solution([70, 50, 80, 50], 100));
// let arr = [1, 2];
// let b = 0;
// b = arr[1] + arr[2];
// console.log(b);
