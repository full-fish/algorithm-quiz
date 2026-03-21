n, s, a, b, fares = (
    6,
    4,
    6,
    2,
    [
        [4, 1, 10],
        [3, 5, 24],
        [5, 6, 2],
        [3, 1, 41],
        [5, 1, 24],
        [4, 6, 50],
        [2, 4, 66],
        [2, 3, 22],
        [1, 6, 25],
    ],
)

import heapq as hq


def solution(n, s, a, b, fares):
    graph = [[] for _ in range(n + 1)]

    def dijkstra(start):
        dist = [float("inf") for _ in range(n + 1)]
        dist[start] = 0
        for a, b, c in fares:
            graph[a].append((c, b))
            graph[b].append((c, a))
        heap = [(0, start)]  # cost, 위치
        while heap:
            cost, now = hq.heappop(heap)
            for cost, next in graph[now]:
                if dist[now] + cost < dist[next]:
                    dist[next] = dist[now] + cost
                    hq.heappush(heap, (cost, next))
        return dist

    temp = []
    temp.append(dijkstra(s))
    temp.append(dijkstra(a))
    temp.append(dijkstra(b))
    dijkstra_sum = [sum(i) for i in zip(*temp)]

    return min(dijkstra_sum)


print(solution(n, s, a, b, fares))
