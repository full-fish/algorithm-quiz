n = 3
roads = [[1, 2], [2, 3]]
sources = [2, 3]
destination = 1


# def solution(n, roads, sources, destination):
#     graph = [[] for _ in range(n + 1)]
#     for a, b in roads:
#         graph[a].append(b)
#         graph[b].append(a)


#     distance = [-1] * (n + 1)
#     distance[destination] = 0

#     for source in sources:
#         DFS(source, 0)

#     def DFS(source, count):
#         for line in graph[source]:
#             count += 1
#             if line == destination:
#                 return count
#             else:
#                 DFS(line, count)


#     answer = []
#     return answer


from collections import deque


def solution(n, roads, sources, destination):
    graph = [[] for _ in range(n + 1)]
    for a, b in roads:
        graph[a].append(b)
        graph[b].append(a)

    # 거리 초기화
    distance = [-1] * (n + 1)
    distance[destination] = 0

    queue = deque([destination])

    # BFS
    while queue:
        current = queue.popleft()
        for next in graph[current]:
            if distance[next] == -1:
                distance[next] = distance[current] + 1
                queue.append(next)

    return [distance[s] for s in sources]


print(solution(n, roads, sources, destination))

"""
도착지에서 한 번만 BFS → 모든 노드까지 최단거리 한 번에 계산 (권장, O(N+M))
• 시작점마다 BFS → sources 개수만큼 반복 (최악 O(|sources|*(N+M)))
""" ""
