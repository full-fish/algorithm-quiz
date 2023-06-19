function solution(my_string, is_prefix) {
    return (my_string.match(new RegExp(is_prefix))?.index ?? 1) ? 0 : 1
}