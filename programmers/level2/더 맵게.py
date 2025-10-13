import heapq

scoville = [1, 2, 3, 9, 10, 12]
K = 7


def solution(scoville, K):
    count = 0
    heapq.heapify(scoville)

    while True:
        min1 = heapq.heappop(scoville)
        if min1 >= K:
            heapq.heappush(scoville, min1)
            break
        if not scoville:
            return -1
        min2 = heapq.heappop(scoville)
        mix = min1 + min2 * 2
        heapq.heappush(scoville, mix)
        count += 1
    return count


print(solution(scoville, K))
