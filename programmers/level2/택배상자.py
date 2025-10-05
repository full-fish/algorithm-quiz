order = [4, 3, 1, 2, 5]


def solution(order):
    n = len(order)
    count = 0
    sub = []
    target = 0
    main = [x for x in range(n, 0, -1)]

    # 다 넣을때는 count가 n이 되어버려서 indexErr남
    while count < n:
        target = order[count]
        # 보조 컨테이너의 마지막이 target일때
        if sub and sub[-1] == target:
            count += 1
            sub.pop()
        # 메인 컨테이너
        elif main:
            # 마지막이 target일때
            if main[-1] == target:
                count += 1
                main.pop()
            # 보조도 아니고 메인도 아니면 보조에 넣음
            else:
                sub.append(main.pop())
        else:
            break
    return count


# print(solution(order))
print(solution([5, 4, 3, 2, 1]))
# box 1
# target box 4
# 메인 5 4 3 2 1
# 보조
# 트럭

# box 2
# target box 4
# 메인 5 4 3 2
# 보조 1
# 트럭

# box 3
# target box 4
# 메인 5 4 3
# 보조 1 2
# 트럭

# box 4
# target box 4
# 메인 5 4
# 보조 1 2 3
# 트럭

# box 5
# target box 3
# 메인 5
# 보조 1 2 3
# 트럭 4

# box 5
# target box 1
# 메인 5
# 보조 1 2
# 트럭 4 3
