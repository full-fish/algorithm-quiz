# def solution(n, costs):
#     result = 0
#     connect = {}
#     costs.sort(key=lambda x: x[2])
#     print(costs)
#     for a, b, cost in costs:
#         connect[a] = True
#         connect[b] = True
#         print(connect)
#         # 루프임
#         if connect.get(a) == 2 and connect.get(b) == 2:
#             if connect.keys() == n:
#                 return result
#             else:
#                 continue
#         else:
#             result += cost
#     return result


"""
탐욕법
비용 작은거로 정렬
순회하면서 연결하는데
사이클이 생길떄
만약 다 연결된 상태면 리턴
아니라면 그 사이클 생기는건 버림
사이클 채크는 객체에서 연결된 애들+1 하다가
방금 더한 2개가 둘다 2면 사이클 True

""" ""


def solution_verbose(n, costs):
    # 비용 오름차순 정렬
    costs = sorted(costs, key=lambda x: x[2])

    parent = list(range(n))
    rank = [0] * n  # 선택: union-by-rank용 (없어도 되지만 예쁘게 병합됨)

    def find(x):
        # 경로 압축 + 로그
        path = []
        while parent[x] != x:
            path.append(x)
            x = parent[x]
        root = x
        # 경로 압축
        for v in path:
            parent[v] = root
        if path:
            print(f"  find 경로압축: {path} → 루트 {root}, parent={parent}")
        return root

    def union(a, b):
        ra, rb = find(a), find(b)
        print(f"  union 시도: {a}-{b}, 루트: {ra}-{rb}")
        if ra == rb:
            print(f"  → 사이클 발생! ({a}-{b})는 스킵")
            return False  # 같은 집합 → 사이클
        # union by rank
        if rank[ra] < rank[rb]:
            parent[ra] = rb
            print(f"  → 병합: parent[{ra}] = {rb}, parent={parent}")
        elif rank[ra] > rank[rb]:
            parent[rb] = ra
            print(f"  → 병합: parent[{rb}] = {ra}, parent={parent}")
        else:
            parent[rb] = ra
            rank[ra] += 1
            print(
                f"  → 병합(랭크상승): parent[{rb}] = {ra}, rank[{ra}]={rank[ra]}, parent={parent}"
            )
        return True

    total = 0
    picked = 0
    print(f"정렬된 간선: {costs}")
    for a, b, cost in costs:
        print(f"\n간선 검사: {a}-{b} (비용 {cost})")
        if union(a, b):
            total += cost
            picked += 1
            print(f"  → 선택됨: 비용 += {cost}, 총비용={total}, 선택간선수={picked}")
            if picked == n - 1:  # MST 완성
                print("\n모든 섬이 연결되었습니다.")
                break

    print(f"\n최종 parent={parent}")
    return total


# 예시 실행 (프로그래머스 섬 연결하기와 동일 포맷: [a, b, cost])
# print(
#     "결과:",
#     solution_verbose(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]),
# )


def solution(n, costs):
    # 비용 기준 오름차순 정렬 (탐욕법)
    costs.sort(key=lambda x: x[2])

    parent = [i for i in range(n)]  # 각 노드의 부모 초기화

    def find(x):
        # 루트 노드를 찾는 함수 (경로 압축)
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
        
    def union(a, b):
        # 두 집합을 합침
        a = find(a)
        b = find(b)
        if a != b:
            parent[b] = a
            return True  # 사이클이 아님
        return False  # 이미 같은 집합 → 사이클 발생

    total = 0
    for a, b, cost in costs:
        # 사이클이 아니면 연결
        print("a,b", a, b)

        if union(a, b):
            total += cost
        print("parent", parent)

    return total


print(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]))
