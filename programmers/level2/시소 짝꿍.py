# def solution(weights):
#     weights.sort()
#     left = 0
#     right = 1
#     length = len(weights)
#     distance = [1, 4 / 3, 1.5, 2]
#     count = 0
#     while True:
#         low = weights[left]
#         arr = [e * low for e in distance]
#         big = weights[right]

#         # big값이 너무 커지면 left 포인트 +1
#         if big > arr[3]:
#             left += 1
#             right = left + 1
#             continue

#         # 들어 있으면 count +1
#         if big in arr:
#             count += 1

#         # right 포인터가 마지막 값이 아니면 올리고 마지막이면 left 올림
#         if right != length - 1:
#             right += 1
#         else:
#             left += 1
#             if right == left:
#                 break
#             right = left + 1

#     return count

#! 위에껀 투포인터로 한건데 이러면 느려서 안됨 해시로 해야함

from collections import Counter


def solution(weights):
    result = 0
    counter = Counter(weights)
    keys = sorted(counter.keys())

    # 같은 무게끼리
    for key, n in counter.items():
        result += n * (n - 1) // 2

    # 서로 다른 무게 비율: 1:2, 2:3, 3:4
    for key in keys:
        n = counter[key]

        temp = key * 2
        if temp in counter:
            result += n * counter[temp]

        # 정수로 딱 나눠떨어질 때만해서 효율 증가
        if (key * 3) % 2 == 0:
            temp = (key * 3) // 2
            if temp in counter:
                result += n * counter[temp]

        if (key * 4) % 3 == 0:
            temp = (key * 4) // 2
            if temp in counter:
                result += n * counter[temp]

    return result


print(solution([100, 180, 360, 100, 270]))
# print(solution([100, 100, 100, 100]))
"""
1 2  1 3  2 3
1 4  2 4  3 4
1 5  2 5  3 5  4 5
2 6
""" ""
