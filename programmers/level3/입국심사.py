def solution(n, times):
    T = 1
    pre_T = 1
    max_p, min_p = 0, 0
    is_find = False
    while 1:
        people = 0
        for time in times:
            people += T // time
        if is_find == False:
            if n <= people:
                is_find = True
                max_p = T
                min_p = T // 2
                continue
            T *= 2

        else:
            if pre_T == T:
                return T + 1
            if n <= people:
                max_p = T
                pre_T = T
                T = (T + min_p) // 2
            elif n > people:
                min_p = T
                pre_T = T
                T = (T + max_p) // 2


# print(solution(12, [7, 10]))  # 50
print(solution(11, [7, 10]))  # 49

#    10  20  30 (31) 32 35  40
"""
1 2 3 4 8 16
32 64   48
48 64   52
""" ""


#! 더 좋은 풀이 이분탐색  아래거로 알아두기
def solution(n, times):
    left, right = 1, max(times) * n
    ans = right
    while left <= right:
        mid = (left + right) // 2

        # mid 시간 동안 처리 가능한 인원 수
        total = 0
        for t in times:
            total += mid // t
            if total >= n:  # 미세 최적화: 더해도 의미 없을 때 탈출
                break

        if total >= n:
            ans = mid
            right = mid - 1
        else:
            left = mid + 1

    return ans
