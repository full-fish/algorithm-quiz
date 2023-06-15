function solution(code) {
    let mode = false
    let ret = ''
    let idx = 0
    for (let c of code) {
        if (c === '1') mode = !mode
        else {
            if (!mode) {
                if (!(idx % 2)) {
                    ret += c
                }
            }
            else {
                if (idx % 2) ret += c
            }
        }
        idx++
    }
    return ret ? ret : 'EMPTY'
}