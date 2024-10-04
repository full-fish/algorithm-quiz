let m = 4
let n = 3
let puddles = [[2, 2]]

function solution(m, n, puddles) {
  let arr = Array.from({ length: n }, () => Array(m).fill(0))

  puddles.forEach((ele) => {
    arr[ele[1] - 1][ele[0] - 1] = -1
  })

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((i === 0 || j === 0) && arr[i][j] !== -1) {
        arr[i][j] = 1;
        continue;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === -1) continue
      if (i === 0 && j === 0) continue
      let value = 0;
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (arr[i][j - 1] !== -1) value += arr[i][j - 1]
        if (arr[i - 1][j] !== -1) value += arr[i - 1][j]
      }


      arr[i][j] += value % 1000000007;
    }
  }

  return arr[n - 1][m - 1] % 1000000007
}

function solution2(m, n, puddles) {
  const cache = Array(n + 1).fill(0).map(row => Array(m + 1).fill(0));

  puddles.forEach(pud => {
    const [a, b] = pud;
    cache[b][a] = -1;
  })

  cache[1][1] = 1;

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      if (row == 1 && col == 1) continue;
      if (cache[row][col] == -1) continue;
      let value = 0;
      if (cache[row][col - 1] !== -1) value += cache[row][col - 1]
      if (cache[row - 1][col] !== -1) value += cache[row - 1][col]

      cache[row][col] += value % 1000000007;
    }
  }
  return cache[n][m] % 1000000007;
}


//!@
function solution3(m, n, puddles) {
  let arr = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

  puddles.forEach((ele) => {
    arr[ele[1]][ele[0]] = -1
  })

  arr[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue
      if (arr[i][j] === -1) continue
      let value = 0;
      if (arr[i][j - 1] !== -1) value += arr[i][j - 1]
      if (arr[i - 1][j] !== -1) value += arr[i - 1][j]

      arr[i][j] += value % 1000000007;
    }
  }
  return arr[n][m] % 1000000007
}

console.log(solution2(m, n, puddles));
console.log(solution3(m, n, puddles));