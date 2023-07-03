function solution1(n, computers) {
    let count = 0
    let visited = Array.from({ length: n }).fill(0)
    for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
            let q = [i]
            while (q.length) {
                let xx = q.shift()
                for (let k = 0; k < computers[xx].length; k++) {
                    if (visited[xx] === 0 && computers[xx][k] === 1) {
                        if (xx !== k) q.push(k)
                    }
                }
                visited[xx] = 1
            }
            count++
        }
    }
    return count
}

//! 다른 사람 풀이 
let arr;
let visitArr;

function solution(n, computers) {
    let ctr = 0;
    arr = computers;
    visitArr = new Array(n).fill(false);
    for (let i in arr) {
        ctr += dfs(i);
    }

    return ctr;
}

function dfs(i) {
    if (visitArr[i] == true) return 0;
    else visitArr[i] = true;

    for (let j in arr[i]) {
        if (arr[i][j] == 1)
            dfs(j);
    }

    return 1;
}
console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));