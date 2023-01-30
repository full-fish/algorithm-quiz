function solution(common) {
  let two = common[2] - common[1]
  let one = common[1] - common[0]
  if (two === one) return common[common.length - 1] + one
  else return (common[common.length - 1] * two) / one
}
