from math import gcd
from functools import reduce

arrayA = [14, 35, 119]
arrayB = [18, 30, 102]


def solution(arrayA, arrayB):
    result = []
    gcd_a = reduce(gcd, arrayA)
    gcd_b = reduce(gcd, arrayB)
    # gcd_a = gcd(*arrayA)
    # gcd_b = gcd(*arrayB)

    def check(arr, n):
        return len([e for e in arr if e % n == 0])

    if check(arrayB, gcd_a) == 0:
        result.append(gcd_a)
    if check(arrayA, gcd_b) == 0:
        result.append(gcd_b)
    return max(result, default=0)


print(solution(arrayA, arrayB))
