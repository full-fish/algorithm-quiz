m_1, n_1, h_1, w_1 = 4, 5, 2, 2
drops_1 = [[0, 0], [3, 1], [1, 3], [2, 4], [1, 1], [2, 2], [2, 3], [0, 4]]
result_1 = [2, 2]

from collections import deque


def solution(m, n, h, w, drops):
    result = [0, 0]
    max = 0
    cnt = 1
    grid = [[float("inf")] * n for _ in range(m)]
    oneArr = [[float("inf")] * (n - w + 1) for _ in range(m)]
    twoArr = [[float("inf")] * (n - w + 1) for _ in range(m - h + 1)]
    for drop in drops:
        grid[drop[0]][drop[1]] = cnt
        cnt += 1

    for i, row in enumerate(grid):
        for j in range(n - w + 1):
            oneArr[i][j] = min(row[j : j + w])

    for i in range(m - h + 1):
        for j in range(n - w + 1):
            twoArr[i][j] = min(row[j] for row in oneArr[i : i + h])

    for i, row in enumerate(twoArr):
        for j, x in enumerate(row):
            if x > max:
                max = x
                result = [i, j]

    return result


def sliding_min(arr, w):
    dq = deque()
    out = []
    for i, x in enumerate(arr):
        while dq and arr[dq[-1]] >= x:
            dq.pop()
        dq.append(i)
        if dq[0] <= i - w:
            dq.popleft()
        if i >= w - 1:
            out.append(arr[dq[0]])
    return out


def solution(m, n, h, w, drops):
    INF = float("inf")
    grid = [[INF] * n for _ in range(m)]
    for t, (r, c) in enumerate(drops):
        if grid[r][c] == INF:  # 처음 맞은 시각만
            grid[r][c] = t

    oneArr = [sliding_min(row, w) for row in grid]  # 가로
    cols = [sliding_min(col, h) for col in zip(*oneArr)]  # 세로 (전치 상태)
    twoArr = [list(row) for row in zip(*cols)]  # 다시 전치

    best = -1
    result = [0, 0]
    for i, row in enumerate(twoArr):
        for j, x in enumerate(row):
            if x > best:
                best = x
                result = [i, j]
    return result


print(solution(m_1, n_1, h_1, w_1, drops_1))
print(solution(m_1, n_1, h_1, w_1, drops_1) == result_1)
# m_2, n_2, h_2, w_2 = 3, 3, 1, 1
# drops_2 = [[0, 0], [0, 1], [0, 2], [1, 0]]
# result_2 = [1, 1]

# m_3, n_3, h_3, w_3 = 4, 6, 3, 4
# drops_3 = [[1, 2]]
# result_3 = [0, 0]

# m_4, n_4, h_4, w_4 = 4, 6, 1, 2
# drops_4 = [
#     [0, 1],
#     [0, 3],
#     [0, 5],
#     [1, 1],
#     [1, 3],
#     [1, 5],
#     [2, 1],
#     [2, 3],
#     [2, 5],
#     [3, 1],
#     [3, 3],
#     [3, 5],
# ]
# result_4 = [3, 4]

# m_5, n_5, h_5, w_5 = 2, 2, 2, 2
# drops_5 = [[0, 0], [0, 1], [1, 1], [1, 0]]
# result_5 = [0, 0]


# m_6, n_6, h_6, w_6 = 4, 4, 3, 1
# drops_6 = [[2, 0], [1, 3], [3, 2], [0, 1]]
# result_6 = [0, 2]
# print(solution(m_2, n_2, h_2, w_2, drops_2) == result_2)
# print(solution(m_3, n_3, h_3, w_3, drops_3) == result_3)
# print(solution(m_4, n_4, h_4, w_4, drops_4) == result_4)
# print(solution(m_5, n_5, h_5, w_5, drops_5) == result_5)
# print(solution(m_6, n_6, h_6, w_6, drops_6) == result_6)
