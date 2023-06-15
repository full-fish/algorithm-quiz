function solution(arr, query) {
    query.forEach((e, i) => {
        if (i % 2) arr = arr.slice(e)
        else arr = arr.slice(0, e + 1)
    })
    return arr
}