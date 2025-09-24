let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
let banned_id = ["fr*d*", "abc1**"]

// let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
// let banned_id = ["*rodo", "*rodo", "******"]

// let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
// let banned_id = ["fr*d*", "*rodo", "******", "******"]
function solution(user_id, banned_id) {
  // 순열로 품 
  // 앞에서 tset가 true일 경우에 splice하면서 비교하다보면 사실 되는건데 순서에 따라서 결과가 안될 수 있기에
  // 순열로 다 하고 중복된 배열 지우는 방식으로 했음
  function DFS(arr, n) {
    let result = []
    function F(n, tempArr) {
      if (n === 0) return result.push(tempArr)
      for (let i = 0; i < arr.length; i++) {
        if (!tempArr.includes(arr[i])) F(n - 1, tempArr.concat(arr[i]));
      }
    }
    F(n, [])
    return result
  }
  let result = []

  let banned_len = banned_id.length
  let banned_id_reg_arr = []
  for (let i = 0; i < banned_len; i++) {
    banned_id[i] = banned_id[i].replace(/\*/g, '.')
    banned_id_reg_arr.push(new RegExp('^' + banned_id[i] + '$'))
  }

  let user_DFS = DFS(user_id, banned_len)

  user_DFS.forEach((user_id_arr) => {
    let temp_banned_id_reg_arr = banned_id_reg_arr.slice()
    user_id_arr.forEach((user_id) => {
      for (let i = 0; i < temp_banned_id_reg_arr.length; i++) {
        if (temp_banned_id_reg_arr[i].test(user_id)) {
          temp_banned_id_reg_arr.splice(i, 1)
          break
        }
      }
    })
    if (temp_banned_id_reg_arr.length === 0) {
      result.push(user_id_arr)
    }
  })

  const uniqueArray = [...new Set(result.map(item => JSON.stringify(item.sort())))];
  result = uniqueArray.map(item => JSON.parse(item));

  return result.length
}
// fradi
// frodo
// abc123
// frodoc
console.log(solution(user_id, banned_id));
// console.log(new RegExp('aa**'));
// console.log(/a\*\*/);
// console.log((/\*/.test('a')));


