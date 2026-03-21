jobs = [[0, 3], [1, 9], [3, 5]]  # 요청 시각, 소요 시간
from collections import deque as dq
import heapq


def solution(jobs):
    # 1. 요청시간 순으로 정렬
    jobs.sort(key=lambda x: x[0])
    n = len(jobs)

    time = 0
    idx = 0  # 아직 대기힙에 안 넣은 jobs 위치
    wait = []  # 대기힙: (소요시간, 요청시각)
    total = 0

    while idx < n or wait:
        # 2. 지금 시간까지 들어온 job은 전부 대기힙에 넣기
        while idx < n and jobs[idx][0] <= time:
            req, dur = jobs[idx]
            heapq.heappush(wait, (dur, req))
            idx += 1

        if wait:
            # 3. 대기 중에서 가장 짧은 작업을 doing으로
            dur, req = heapq.heappop(wait)
            time += dur
            total += time - req
        else:
            # 4. 대기 중이 없으면, 다음 job이 들어오는 시각으로 점프
            time = jobs[idx][0]

    return total // n


print(solution(jobs))
#! 둘다 보기

# import heapq

# def solution(jobs):
#     # 1. 요청시각 정렬
#     jobs.sort(key=lambda x: x[0])

#     time = 0
#     wait = []   # 대기 힙: (소요시간, 요청시각)
#     total = 0

#     for req, dur in jobs:
#         # 아직 시간이 이 job 시작시각보다 작으면 거기로 점프
#         if time < req and not wait:
#             # 아무것도 안 돌고 있을 때만 점프
#             time = req

#         # 만약 지금 돌리는 중인 작업이 없고,
#         # 이 작업을 지금 바로 돌려도 되면 바로 돌림
#         if time >= req and not wait:
#             # 지금 바로 처리
#             time += dur
#             total += time - req
#         else:
#             # 지금은 못 돌리니까 대기열에 넣어두기 (소요시간 기준)
#             heapq.heappush(wait, (dur, req))

#         # 여기서 "처리할 게 많으면 while로 돌린다" 부분
#         # → 지금 들어온 것까지 넣었는데, 현재 time 이후에도
#         #   돌릴 수 있는 애가 대기열에 쌓여 있으면 털어낸다
#         while wait and (len(wait) > 0) and (time >= wait[0][1]):
#             d, r = heapq.heappop(wait)
#             # 만약 time이 r보다 작을 수는 없지만, 안전하게
#             if time < r:
#                 time = r
#             time += d
#             total += time - r

#     # for 다 돌고도 대기열 남아 있으면 마저 처리
#     while wait:
#         d, r = heapq.heappop(wait)
#         if time < r:
#             time = r
#         time += d
#         total += time - r

#     return total // len(jobs)
