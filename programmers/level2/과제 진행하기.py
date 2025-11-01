plans = [
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
]
# ["science", "history", "computer", "music"]
from collections import deque as dq


def solution(plans):
    result = []
    now = 0
    for plan in plans:
        h, m = map(int, plan[1].split(":"))
        plan[1] = h * 60 + m
        plan[2] = int(plan[2])

    plans.sort(key=lambda x: x[1])
    stack = []
    queue = dq(plans)

    while queue:
        plan = queue.popleft()
        _, time, _ = plan
        if not stack:
            stack.append(plan)
        else:
            pre_name, _, pre_playtime = stack[-1]
            elapsed_time = time - now
            remaining_time = elapsed_time - pre_playtime
            if remaining_time >= 0:
                result.append(pre_name)
                stack.pop()
                # 여유 시간 있을때 밀린거 처리
                while remaining_time > 0 and stack:
                    pre_name, _, pre_playtime = stack[-1]
                    temp = remaining_time - pre_playtime
                    if temp >= 0:
                        result.append(pre_name)
                        stack.pop()
                        remaining_time = temp
                    else:
                        stack[-1][2] = -temp
                        remaining_time = 0
                stack.append(plan)
            else:
                stack[-1][2] = pre_playtime - elapsed_time
                stack.append(plan)
        now = plan[1]

    while stack:
        result.append(stack.pop()[0])

    return result


print(solution(plans))


def solution(plans):
    plans = sorted(
        map(lambda x: [x[0], int(x[1][:2]) * 60 + int(x[1][3:]), int(x[2])], plans),
        key=lambda x: -x[1],
    )

    lst = []
    while plans:
        x = plans.pop()
        for i, v in enumerate(lst):
            if v[0] > x[1]:
                lst[i][0] += x[2]
        lst.append([x[1] + x[2], x[0]])
    lst.sort()

    return list(map(lambda x: x[1], lst))


print(3 * 3 * 3.14)
print(2 * 2 * 3.14)
