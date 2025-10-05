sequence = [1, 2, 3, 4, 5]
k = 7
sequence2 = [1, 1, 1, 2, 3, 4, 5]
k2 = 5
sequence3 = [2, 2, 2, 2, 2]
k3 = 6


def solution(sequence, k):
    left = 0
    right = 0
    range_sum = sequence[0]
    length = len(sequence)
    LR_range = [0, float("inf")]

    while left <= right:
        if range_sum == k:
            if LR_range[1] - LR_range[0] > right - left:
                LR_range = [left, right]
            if right >= length - 1:
                break
            else:
                right += 1
                range_sum += sequence[right]
        # left++
        elif range_sum > k:
            range_sum -= sequence[left]
            left += 1
        # right++
        else:
            if right >= length - 1:
                break
            else:
                right += 1
                range_sum += sequence[right]
    return LR_range


# print(solution(sequence, k))
# print("---------------")
print(solution(sequence2, k2))
# print("---------------")
# print(solution(sequence3, k3))
