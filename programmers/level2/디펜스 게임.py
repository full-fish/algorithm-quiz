n = 5
k = 3
enemy = [4]

import heapq


def solution(n, k, enemy):
    sum = 0
    heap = []
    for i, e in enumerate(enemy):

        sum += e
        heapq.heappush(heap, -e)
        if sum >= n:
            if k > 0:
                most_num = -heapq.heappop(heap)
                sum -= most_num
                k -= 1
            else:
                return i
    return len(enemy)


print(solution(n, k, enemy))
