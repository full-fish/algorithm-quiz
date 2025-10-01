stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1]
k = 3

stones2 = [1, 2, 1]
k2 = 2

# def can_cross(stones, k, p):
#     consec = 0
#     for stone in stones:
#         if stone < p:
#             consec += 1
#             if consec >= k:
#                 return False
#         else:
#             consec = 0
#     return True


# def solution(stones, k):
#     low, high = 1, max(stones) + 1  # [lo, hi)
#     while low < high:
#         mid = (low + high) // 2
#         if can_cross(stones, k, mid):
#             low = mid + 1
#         else:
#             high = mid
#     return low - 1


# print(solution(stones, k))
"""''
"""


def solution(stones, k):
    low, high = 1, max(stones)

    def can_cross(n):
        count = 0
        for stone in stones:
            if n >= stone:
                count += 1
                if count == k:
                    return False
            else:
                count = 0
        return True

    while high > low:
        mid = (low + high) // 2
        if can_cross(mid):
            low = mid + 1
        else:
            high = mid
    return low


print(solution(stones, k))
print(solution(stones2, k2))
