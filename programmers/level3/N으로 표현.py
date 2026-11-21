"""아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중
N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.
N	number	return
5	12	4
2	11	3

이게 어떻게 DP지? 다 훑는게 아닌가  다 훑어야할거 같은데
dp도 다 훑기는 하긴 해
이건 답이 5라고 할때 4가 최선도 아니야 값이 가까워진다고
최선이 아니고 어떻게 될지 몰라 곱하기랑 나누기 있으니까
아래서 올라가면서도 최선값이 없으니까 비교해서 정할 수 가 없어

set을 쓰고
2개째는 2개를 사칙연산. 계속 붙어있는것도 넣어야함
3개쨰는 1개랑 2개 부분 나눠서 묶음 사칙연산 즉 d[1] d[2] 묶음
4개째는
"""

N = 5
number = 5


def solution(N, number):
    if N == number:
        return 1
    dp = [0, {N}] + [set() for _ in range(7)]
    for n in range(2, 9):
        for k in range(1, n // 2 + 1):
            dp_a = dp[n - k]
            dp_b = dp[k]

            for a in dp_a:
                for b in dp_b:
                    dp[n].update(all_results(a, b))
            dp[n].add(int(str(N) * n))
        if number in dp[n]:
            return n

    return -1


def all_results(left, right):
    result = []

    def add_ops(x, y, flag):
        if flag:
            result.append(x + y)
            result.append(x * y)
        result.append(x - y)
        if y > 0:
            result.append(x // y)

    add_ops(left, right, True)
    add_ops(right, left, False)
    return result


print(solution(N, number))
S = {1, 2, 3}
print(S)
print(list(S))
# dp[i-1]에 이미 N은 들어가있으니까
# 지금 내가 하는건 d[4]의 경우 N과 d[3]만 조합중
# d[1] d[3] / d[2] d[2]  이렇게 모든 쌍 조합해야함
# N 자체는 d[1]임
print(5 // 2)
