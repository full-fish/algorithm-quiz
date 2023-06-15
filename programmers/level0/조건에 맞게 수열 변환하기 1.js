function solution(arr) {
    return arr.map((e) => {
        if (e >= 50 && !(e % 2)) return e / 2
        else if (e < 50 && e % 2) return e * 2
        else return e
    })
}