let genres = ["classic", "pop", "classic", "classic", "pop"]		//[4, 1, 3, 0]
let plays = [500, 600, 150, 800, 2500]
function solution(genres, plays) {
    let obj = {}
    for (let i = 0; i < genres.length; i++) {
        if (genres[i] in obj) {
            obj[genres[i]].total += plays[i]
            obj[genres[i]].info.push([i, plays[i]])
        }
        else {
            obj[genres[i]] = { total: plays[i], info: [[i, plays[i]]] }
        }
    }
    // for (let key in obj) {
    //   obj[key].info.sort((a, b) => {
    //     if (b[1] !== a[1]) return b[1] - a[1]
    //     else return a[0] - b[0]
    //   })
    // }
    let arr = Object.entries(obj)
    console.dir(arr, { depth: null });

    for (let i = 0; i < arr.length; i++) {
        arr[i][1].info.sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1]
            else return a[0] - b[0]
        })
    }
    arr.sort(({ total: a }, { total: b }) => b[1] - a[1])
    console.dir(obj, { depth: null });
    console.dir(arr, { depth: null });

}
console.log(solution(genres, plays))