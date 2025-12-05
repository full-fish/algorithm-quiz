import math


def solution(w, h):
    part = math.gcd(w, h)
    if w // part == 1 or h // part == 1:
        return 0
    return w * h - w if w == h else w * (h - (math.ceil((h / math.gcd(w, h)) / 2)))
    # return (w * h) - ((w // part) * (part * 2))


print(solution(2, 2))
print(solution(2, 3))
print(solution(2, 4))
print(solution(3, 4))
