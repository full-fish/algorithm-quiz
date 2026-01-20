n = 6
edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]

from collections import deque as dq


def solution(n, edge):
    arr = []
    for i in range(n + 1):
        arr.append([])

    for a, b in edge:
        arr[a].append(b)
        arr[b].append(a)

    queue = dq([1])
    distance = [-1 for _ in range(n + 1)]
    distance[1] = 0
    while queue:
        cureent = queue.popleft()
        for next in arr[cureent]:
            if distance[next] == -1:
                distance[next] = distance[cureent] + 1
                queue.append(next)
    return len([True for e in distance if max(distance) == e])


print(solution(n, edge))
