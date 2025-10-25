maps = ["SELXX", "XXXXX", "XXXXX", "XXXXX", "XXXXX"]

from collections import deque as dq


def solution(maps):
    arr = []
    row_length = len(maps)
    col_length = len(maps[0])
    S = None

    for i, row in enumerate(maps):
        line = list(row)
        arr.append(line)
        for j, cell in enumerate(line):
            if cell == "S":
                S = (i, j)

    # 레버 당기기 전과 후의 visited 따로 만듦
    visited = [
        [[False for _ in range(col_length)] for _ in range(row_length)]
        for _ in range(2)
    ]

    visited[0][S[0]][S[1]] = True
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    # x,y,개수,레버 당김 여부
    queue = dq([[*S, 0, 0]])

    while queue:
        x, y, n, is_pull = queue.popleft()
        for i in range(4):
            s_x = x + dx[i]
            s_y = y + dy[i]

            # 경계조건
            if not (0 <= s_x < row_length and 0 <= s_y < col_length):
                continue
            shift = arr[s_x][s_y]
            if shift == "X":
                continue
            temp_pull = 1 if (is_pull or shift == "L") else 0
            if shift == "E" and temp_pull:
                return n + 1
            if visited[temp_pull][s_x][s_y] == False:
                visited[temp_pull][s_x][s_y] = True
                queue.append([s_x, s_y, n + 1, temp_pull])
    return -1


print("solution(maps)", solution(maps))
