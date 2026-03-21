board = [[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]

# from collections import deque as dq
import heapq as hq


def solution(board):
    row_len, col_len = len(board), len(board[0])
    distance = [[[float("inf")] * 4 for _ in row] for row in board]
    # distance[0][0] = 0
    for d in range(4):
        distance[0][0][d] = 0
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    heap = [[0, 0, 0, -1]]  # cost, x, y, pre

    while heap:
        cost, x, y, pre = hq.heappop(heap)
        for d in range(4):
            nx, ny = x + dx[d], y + dy[d]
            # 경계체크
            if not (0 <= nx < row_len and 0 <= ny < col_len):
                continue
            # 막힌곳
            if board[nx][ny] == 1:
                continue

            add_cost = 100 if (pre == -1 or pre == d) else 600
            next_cost = cost + add_cost
            if distance[nx][ny][d] > next_cost:
                distance[nx][ny][d] = next_cost
                hq.heappush(heap, [next_cost, nx, ny, d])
    return min(distance[-1][-1])


print(solution(board))
