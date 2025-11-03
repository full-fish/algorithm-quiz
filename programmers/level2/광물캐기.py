picks = [1, 0, 0]
minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]


def solution(picks, minerals):
    result = 0
    arr = []
    max_boundery = sum(picks) * 5
    for i in range(0, len(minerals[:max_boundery]), 5):  # 5개씩 끊기
        group = minerals[i : i + 5]
        temp = [0, 0, 0]  # [다이아곡괭이, 철곡괭이, 돌곡괭이]
        for e in group:
            if e == "diamond":
                temp[0] += 1
            elif e == "iron":
                temp[1] += 1
            else:
                temp[2] += 1
        arr.append(temp)
        arr.sort(key=lambda x: (-x[0], -x[1], -x[2]))
    for x, y, z in arr:
        if picks[0] > 0:
            picks[0] -= 1
            result += x + y + z
        elif picks[1] > 0:
            picks[1] -= 1
            result += 5 * x + y + z
        elif picks[2] > 0:
            picks[2] -= 1
            result += 25 * x + 5 * y + z

    return result


print(solution(picks, minerals))


# from itertools import combinations


# def tt(arr, sizes):
#     length = len(arr)
#     result = []
#     if sizes[0] >= length:
#         return arr
#     for e in combinations(arr, sizes[0]):

#         print(1)


# def split_by_sizes(arr, sizes):
#     arr = list(arr)
#     if sum(sizes) != len(arr):
#         raise ValueError("sizes 합이 전체 원소 수와 같아야 해")
#     results = []

#     def backtrack(remaining, idx, current):
#         if idx == len(sizes):
#             results.append([list(g) for g in current])
#             return
#         k = sizes[idx]
#         for combo in combinations(remaining, k):
#             rest = [x for x in remaining if x not in combo]
#             backtrack(rest, idx + 1, current + [combo])

#     backtrack(arr, 0, [])
#     return results


# # 사용 예
# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# sizes = [3, 3, 4]
# parts = split_by_sizes(arr, sizes)

# # print(len(parts))  # 6C1 * 5C2 * 3C3 = 60
# # print(parts[:5])  # 앞의 몇 개만 미리보기


# print(solution(picks, minerals))
# for e in combinations([1, 2, 3], 3):
#     print(e)
