function solution(date1, date2) {
    const seconds1 = new Date(`${date1[0]} ${date1[1]} ${date1[2]}`).getTime()
    const seconds2 = new Date(`${date2[0]} ${date2[1]} ${date2[2]}`).getTime()
    return seconds1 < seconds2 ? 1 : 0
}