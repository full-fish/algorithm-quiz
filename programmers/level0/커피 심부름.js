function solution(order) {
    return order.reduce((a, c) => a += /americano|anything/.test(c) ? 4500 : 5000, 0)
}