"""처리해야 할 동일한 작업이 n 개가 있고,
이를 처리하기 위한 CPU가 있습니다.

이 CPU는 다음과 같은 특징이 있습니다.

CPU에는 여러 개의 코어가 있고, 코어별로 한 작업을
처리하는 시간이 다릅니다.
한 코어에서 작업이 끝나면 작업이 없는 코어가 바로
다음 작업을 수행합니다.
2개 이상의 코어가 남을 경우 앞의 코어부터 작업을 처리 합니다.
처리해야 될 작업의 개수 n과, 각 코어의 처리시간이
담긴 배열 cores 가 매개변수로 주어질 때,
 마지막 작업을 처리하는 코어의 번호를 return
   하는 solution 함수를 완성해주세요.

제한 사항
코어의 수는 10,000 이하 2이상 입니다.
코어당 작업을 처리하는 시간은 10,000이하 입니다.
처리해야 하는 일의 개수는 50,000개를 넘기지 않습니다.
입출력 예
n	cores	result
6	[1,2,3]	2

0  1 2 3
1  1
2  1 2

우선 최소공배수만큼 빼고 그 다음 셀까
최소공배수라면 6이니까 6+3+2  n이 11씩 까짐
len(cores) 보다 n이 작으면 cores[n]
크면
n= n-len(cores)하고
time+=1 하면서 cores 순회는 반복이 많을텐데 괜찮나  n^2인데

queue를 쓴다면
코어마다 끝나는 시간이 달라서 쓰기 애매한데

이중 배열로 끝나는 시간을 적으면
[[1,1], [3,1]]
이건 계속 정렬해야해서 오래걸리겠다
heapq쓰자
"""

n = 6
cores = [1, 2, 3]
# 2
import heapq as hq


# 힙 쓴건데 시간초과남
def solution(n, cores):
    if n <= len(cores):
        return n

    heap = []
    for i, core in enumerate(cores):
        hq.heappush(heap, (core, i))  # 끝나는 시간, 코어 번호
    n -= len(cores)

    while n > 0:
        add_time, rest_core = hq.heappop(heap)
        hq.heappush(heap, (cores[rest_core] + add_time, rest_core))
        n -= 1
    return rest_core + 1


def solution2(n, cores):
    def sum_task(t):
        return sum([t // core + 1 for core in cores])

    # 이분탐색
    # 시간 t 지났을때 어떤 core의 작업 수는 t // cores + 1
    # 다 더해서 n 이상 되는 가장 작은 t
    # 좌우 끝점 둬서 투포인터
    left = 0
    right = min(cores) * n
    mid = (left + right) // 2

    while left < right:
        mid = (left + right) // 2
        if sum_task(mid) >= n:
            right = mid
        else:
            left = mid + 1
    target_index = n - sum_task(left - 1)
    c = 0
    for i, core in enumerate(cores):
        if left % core == 0:
            c += 1
            if c == target_index:
                return i + 1


# print(solution(n, cores))
print(solution2(n, cores))
# 1초떄 1,2,3 3개 드감
# 2초떄 1
