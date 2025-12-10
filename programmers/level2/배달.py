N = 5
road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]]
K = 3


# def solution(N, road, K):
#     def DFS(arr, time, visited):

#         if K < time:
#             return 0
#         best = 1
#         for x, y in arr:
#             if x in visited:
#                 continue
#             visited.add(x)
#             temp = 1 + DFS(graph[x], time + y, visited)
#             visited.remove(x)
#             best = max(best, temp)
#         return best

#     graph = [[] for _ in range(N + 1)]

#     for a, b, t in road:
#         graph[a].append([b, t])
#         graph[b].append([a, t])

#     return DFS(graph[1], 0, set([1]))
import heapq as hq


def solution(N, road, K):
    graph = [[] for _ in range(N + 1)]
    for a, b, c in road:
        graph[a].append((b, c))
        graph[b].append((a, c))

    distance = [float("inf") for _ in range(N + 1)]
    distance[1] = 0
    heap = [(0, 1)]  # 시간, 위치
    while heap:
        time, now = hq.heappop(heap)
        if time > distance[now]:
            continue
        for next, cost in graph[now]:
            new_time = time + cost
            # 더 적은 시간 갱신
            if new_time < distance[next]:
                distance[next] = new_time
                hq.heappush(heap, (new_time, next))
    print(distance)

    return sum(d <= K for d in distance)


print(solution(N, road, K))
"""
1번 마을로 부터 가까운 마을부터 확장시키며
더 짧게 갈 수 있는지 계속 업데이트
모두 돌면
1번 마을로부터의 최소 거리들이 나옴
""" ""
