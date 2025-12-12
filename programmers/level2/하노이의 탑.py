def solution(n):
    result = []

    def hanoi(n, start, temp, end):
        if n == 1:
            result.append([start, end])
            return

        # 1단계: n-1개를 보조 기둥으로 옮김
        hanoi(n - 1, start, end, temp)

        # 2단계: 가장 큰 원판을 목표 기둥으로
        result.append([start, end])

        # 3단계: 보조 기둥에 있던 n-1개를 목표로 옮김
        hanoi(n - 1, temp, start, end)

    hanoi(n, 1, 2, 3)


# [ [1,2], [1,3], [2,3] ]
print(solution(3))


# 1
# 2
# 3

#      1
# 3    2

# 3 2 1

#   1
# 3 2
