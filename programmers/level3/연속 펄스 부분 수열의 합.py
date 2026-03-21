sequence = [2]


def part_sum(arr):
    d = arr[0]
    max_num = d
    for i, n in enumerate(arr):
        if i == 0:
            continue
        d = max(d + n, n)
        max_num = max(d, max_num)
    return max_num


def solution(sequence):
    s_1 = [e * -1 if i % 2 == 0 else e for i, e in enumerate(sequence)]
    s_2 = [e * -1 if i % 2 == 1 else e for i, e in enumerate(sequence)]
    return max(part_sum(s_1), part_sum(s_2))


print(solution(sequence))

#! 누적합을 구하고 누적합의 가장 큰 값과 작은 값의 차이가 최대 합이 됨
# def solution(sequence):
#     v = [0]
#     for i,s in enumerate(sequence): v.append(v[-1] + s * [1,-1][i%2])
#     return max(v) - min(v)
