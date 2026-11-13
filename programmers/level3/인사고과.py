def solution(scores):
    result = 0
    s = sum((scores[0][0], scores[0][1]))
    num_a, num_b = scores[0]
    max_b = -1
    scores.sort(key=lambda x: (-x[0], x[1]))

    for a, b in scores:
        if b >= max_b:
            max_b = b
            if a + b > s:
                result += 1
        elif num_a == a and num_b == b:
            return -1

    return result + 1