function solution(num_list) {
    let count = 0
    num_list.forEach((e) => {
        while (e > 1) {
            e % 2 ? e = (e - 1) / 2 : e /= 2
            count++
        }
    })
    return count
}