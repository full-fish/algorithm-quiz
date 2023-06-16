function solution(n) {
    let arr = Array.from({ length: n }, () => Array(n).fill(0))
    let now = [0, -1]
    let index = 0
    let dx = [1, 0, -1, 0]
    let dy = [0, 1, 0, -1]
    let num = 1
    while (num <= n ** 2) {
        move(index)
    }
    return arr
    function move(i) {
        let nextY = now[0] + dy[i]
        let nextX = now[1] + dx[i]
        if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < n && arr[nextY][nextX] === 0) {
            now = [nextY, nextX]
            arr[now[0]][now[1]] = num
            num++
        }
        else i < 3 ? index += 1 : index = 0
    }
}