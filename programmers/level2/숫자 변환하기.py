from collections import deque as dq


def solution(x, y, n):
    if x == y:
        return 0
    queue = dq([[x, 0]])
    visited = [False] * (y + 1)
    while queue:
        current, distance = queue.popleft()
        for next in [current + n, current * 2, current * 3]:
            if next < y and not visited[next]:
                visited[next] = True
                queue.append([next, distance + 1])
            elif next == y:
                return distance + 1
    return -1


print(solution(10, 10, 5))
print(solution(10, 40, 30))
print(solution(10, 40, 5))
a = set([10])
print(a)
