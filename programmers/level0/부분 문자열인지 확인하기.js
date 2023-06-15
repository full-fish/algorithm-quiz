function solution(my_string, target) {
    return new RegExp(target).test(my_string) ? 1 : 0
}