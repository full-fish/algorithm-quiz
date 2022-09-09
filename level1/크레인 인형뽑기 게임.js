let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let result = 0;
  let temp = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        temp.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        if (temp[temp.length - 1] === temp[temp.length - 2]) {
          temp = temp.slice(0, temp.length - 2);
          result += 2;
        }
        break;
      }
    }
  }
  return result;
}

console.log(solution(board, moves));
console.log([1, 2, 3, 4].slice(0, 2));
