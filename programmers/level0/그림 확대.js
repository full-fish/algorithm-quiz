function solution(picture, k) {
    let result = []
    for (let i = 0; i < picture.length; i++) {
        let str = ''
        for (let j = 0; j < picture[i].length; j++) {
            str += picture[i][j].repeat(k)
        }
        for (let l = 0; l < k; l++) {
            result.push(str)
        }
    }
    return result
}