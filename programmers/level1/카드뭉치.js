let cards1 = ['i', 'drink', 'water']
let cards2 = ['want', 'to']
let goal = ['i', 'want', 'to', 'drink', 'water']
function solution(cards1, cards2, goal) {
  while (goal.length > 0) {
    let q = goal.shift()
    if (cards1[0] === q) cards1.shift()
    else if (cards2[0] === q) cards2.shift()
    else return 'No'
  }
  return 'Yes'
}
