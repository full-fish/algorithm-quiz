function solution(arr, queries) {
    return queries.map((e) => arr.slice(e[0], e[1] + 1).filter((n) => n > e[2]).length ? Math.min(...arr.slice(e[0], e[1] + 1).filter((n) => n > e[2])) : -1)
}