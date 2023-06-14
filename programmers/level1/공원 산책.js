function solution(park, routes) {
    let now = findStart()
    let dx = [1, 0, -1, 0]
    let dy = [0, 1, 0, -1]
    let dxdyIndex = 0
    for (let i = 0; i < routes.length; i++) {
        let temp = now.slice()
        let [, direction, distance] = routes[i].match(/([A-Z]) (\d+)/)
        switch (direction) {
            case "E":
                dxdyIndex = 0
                break;
            case 'S':
                dxdyIndex = 1
                break;
            case 'W':
                dxdyIndex = 2
                break;
            case 'N':
                dxdyIndex = 3
                break;
        }
        while (distance) {
            temp = [temp[0] + dx[dxdyIndex], temp[1] + dy[dxdyIndex]]
            if (park[temp[0]]?.[temp[1]] === undefined || park[temp[0]]?.[temp[1]] === 'X') {
                temp = now.slice()
                break
            }
            distance--
        }
        now = temp.slice()
    }
    return now

    function findStart() {
        for (let i = 0; i < park.length; i++) {
            for (let j = 0; j < park[0].length; j++) {
                if (park[i][j] === 'S') return [i, j]
            }
        }
    }
}