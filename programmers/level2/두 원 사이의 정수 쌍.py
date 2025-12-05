import math


def solution(r1, r2):
    result = 0
    for x in range(1, r2 + 1):
        y1 = math.ceil(math.sqrt(r1**2 - x**2)) if x <= r1 else 0
        y2 = math.floor(math.sqrt(r2**2 - x**2))
        result += y2 - y1 + 1
    return result * 4


print(solution(2, 3))
# y1 = np.sqrt(r**2 - x**2)
