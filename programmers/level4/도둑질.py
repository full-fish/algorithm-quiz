def solution(money):
    L = len(money)
    dp_1 = [money[0], max(money[0], money[1])] + [0] * (L - 3)
    dp_2 = [0, money[1], max(money[1], money[2])] + [0] * (L - 3)
    for i in range(2, L - 1):
        dp_1[i] = max(dp_1[i - 1], dp_1[i - 2] + money[i])

    for i in range(3, L):
        dp_2[i] = max(dp_2[i - 1], dp_2[i - 2] + money[i])

    return max(dp_1[L - 2], dp_2[L - 1])