land = [
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
]

from collections import deque as dq


def solution(land):
    result = 0
    R, C = len(land), len(land[0])
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    group = [[0] * C for _ in range(R)]
    group_size = {}
    label = 1

    # 그룹 화
    for col in range(0, C):
        for row in range(0, R):
            if land[row][col] == 1 and group[row][col] == 0:
                queue = dq([[row, col]])
                group[row][col] = label
                size = 1

                while queue:
                    x, y = queue.popleft()
                    for i in range(4):
                        nx, ny = x + dx[i], y + dy[i]
                        if not (0 <= nx < R and 0 <= ny < C):
                            continue
                        if land[nx][ny] == 1 and group[nx][ny] == 0:
                            group[nx][ny] = label
                            queue.append([nx, ny])
                            size += 1
                group_size[label] = size
                label += 1

    # 최대 크기 계산
    for col in range(0, C):
        col_label = set()
        temp_sum = 0
        for row in range(0, R):
            if land[row][col] == 1:
                col_label.add(group[row][col])
        for label in list(col_label):
            temp_sum += group_size[label]
        result = max(result, temp_sum)

    return result


print(solution(land))
