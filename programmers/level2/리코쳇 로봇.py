board = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]

from collections import deque as dq


def solution(board):
    arr = []
    R = ()
    for row_i, row in enumerate(board):
        arr.append(list(row))
        for cell_i, cell in enumerate(row):
            if cell == "R":
                R = (row_i, cell_i)
    row_length = len(arr)
    col_length = len(arr[0])

    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    queue = dq([[*R, 0]])
    visited = set()

    def is_boundary(x, y):
        return 0 <= x < row_length and 0 <= y < col_length

    while queue:
        x, y, n = queue.popleft()
        for i in range(4):
            nx = x
            ny = y

            while True:
                nx += dx[i]
                ny += dy[i]
                if not is_boundary(nx, ny) or arr[nx][ny] == "D":
                    nx -= dx[i]
                    ny -= dy[i]
                    break

            if x == nx and y == ny:
                continue

            if arr[nx][ny] == "G":
                return n + 1
            if (nx, ny) not in visited:
                queue.append([nx, ny, n + 1])
                visited.add((nx, ny))
    return -1


print(solution(board))
