function solution(name, yearning, photo) {
    let obj = {}
    name.forEach((e, i) => obj[e] = yearning[i])
    return photo.map((e) => e.reduce((a, c) => a + (obj[c] ? obj[c] : 0), 0))
}