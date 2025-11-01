from tkinter import N


diffs = [1, 99999, 100000, 99995]
times = [9999, 9001, 9999, 9001]
limit = 3456789012


def elapsed_time(level, diff, time_cur, time_prev):
    if level >= diff:
        return time_cur
    else:
        repeat = diff - level
        return (time_cur + time_prev) * repeat + time_cur


def solution(diffs, times, limit):
    n = len(diffs)
    min_n = 0
    max_n = max(diffs)
    level = 0
    pre_level = -1
    reulst = 0
    while min_n <= max_n:
        total_time = 0
        level = (max_n + min_n) // 2
        for i in range(n):
            time = elapsed_time(level, diffs[i], times[i], times[i - 1] if i > 0 else 0)
            total_time += time
        # 여유 여유가 있다는건 레벨을 더 낮춰도 된다
        if limit >= total_time:
            result = level
            max_n = level - 1
        # 여유가 없다 level을 높여야한다
        else:
            min_n = level + 1

    return result


print(solution(diffs, times, limit))
"""
0 5 10 
""" ""
