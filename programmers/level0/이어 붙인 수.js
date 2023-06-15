function solution(num_list) {
    let even = '', odd = ''
    num_list.forEach((e => {
        e % 2 ? odd += String(e) : even += String(e)
    }))
    return parseInt(even) + parseInt(odd)
}