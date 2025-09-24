
let sticker = [14, 6, 5, 11, 3, 9, 2, 10]
// let sticker = [6, 5, 3]

function solution(sticker) {
  let len = sticker.length

  if (len === 1) return sticker[0]
  if (len === 2) return Math.max(sticker[0], sticker[1])

  // 0번 인덱스 시작
  let dp1 = Array(len - 1).fill(0)
  console.log('dp1', dp1);
  dp1[0] = sticker[0]
  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i])
  }
  console.log('dp1', dp1);
  // 1번 인덱스 시작
  let dp2 = Array(len).fill(0)
  dp2[1] = sticker[1]
  console.log(dp2);
  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i])
  }
  console.log('dp2', dp2);
  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])
}

function solution2(sticker) {
  let len = sticker.length

  if (len === 1) return sticker[0]
  if (len === 2) return Math.max(sticker[0], sticker[1])

  // 0번 인덱스 시작
  let dp1 = Array(len - 1).fill(0)
  dp1[0] = sticker[0]
  dp1[1] = sticker[0]
  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i])
    console.log('dp1', dp1);
  }

  // 1번 인덱스 시작
  let dp2 = Array(len).fill(0)
  dp2[1] = sticker[1]
  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i])
    console.log('dp2', dp2);

  }

  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])
}
// console.log(solution(sticker));
console.log(solution2(sticker));