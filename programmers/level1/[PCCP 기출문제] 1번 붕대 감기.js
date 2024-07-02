// let bandage = [5, 1, 5]
// let health = 30
// let attacks = [[2, 10], [9, 15], [10, 5], [11, 5]]

let bandage = [3, 2, 7]
let health = 20
let attacks = [[1, 15], [5, 16], [8, 6]]
// 1 5 / 2 7 / 3 9 / 4 18 / 5 2 / 6 4 / 7 6 / 8 0           

function solution(bandage, health, attacks) {
  let time = 0
  let rawHealth = health
  for (let i = 0; i < attacks.length; i++) {
    health += ((attacks[i][0] - time - 1) * bandage[1] + ~~((attacks[i][0] - time - 1) / bandage[0]) * bandage[2])
    if (health > rawHealth) health = rawHealth
    health -= attacks[i][1]
    if (health <= 0) {
      return -1
    }
    time = attacks[i][0]
  }
  return health
}
console.log(solution(bandage, health, attacks));

