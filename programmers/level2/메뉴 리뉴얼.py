orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2, 3, 4]
orders2 = ["XYZ", "XWY", "WXA"]
course2 = [2, 3, 4]


def solution(orders, course):
    result = []
    obj = {}

    # orders 오름차순으로
    sorted_orders = ["".join(sorted(order)) for order in orders]

    # 객체 선언
    for n in course:
        obj[n] = {}

    for n in course:
        for order in sorted_orders:
            if n > len(order):
                continue
            combination_arr = combination(order, n)
            for c in combination_arr:
                obj[n][c] = obj[n].get(c, 0) + 1

        over_two_obj = {k: v for k, v in obj[n].items() if v >= 2}
        if not over_two_obj:
            continue

        max_value = max(over_two_obj.values())
        max_key_arr = [k for k, v in over_two_obj.items() if max_value == v]
        result += max_key_arr

    result.sort()
    return result


# 조합
def combination(arr, n):
    result = []

    def DFS(n, tempArr, index):
        if n == 0:
            return result.append(tempArr)
        for i in range(index, len(arr)):
            DFS(n - 1, tempArr + arr[i], i + 1)

    DFS(n, "", 0)
    return result


print(combination("abc", 4))
# print(solution(orders, course))


print(solution(orders2, course2))

"""
course에 있는 숫자별로 obj만들어서
orders 돌면서 조합으로 객체 쫙 만들고
그 객체값 숫자 높은거

아래는 다른 사람 풀이
라이브러리 이용한 깔끔한 풀이
""" ""

# import collections
# import itertools

# def solution(orders, course):
#     result = []

#     for course_size in course:
#         order_combinations = []
#         for order in orders:
#             order_combinations += itertools.combinations(sorted(order), course_size)

#         most_ordered = collections.Counter(order_combinations).most_common()
#         result += [ k for k, v in most_ordered if v > 1 and v == most_ordered[0][1] ]

#     return [ ''.join(v) for v in sorted(result) ]
