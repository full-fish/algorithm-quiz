prices = [1, 2, 3, 2, 3]

# prices2 = [1, 3, 5, 7, 5, 3, 5, 3]  # [7, 6, 3, 1, 1, 2, 1, 0]


# def solution(prices):
#     result_arr = [0] * len(prices)
#     index_arr = []
#     length = len(prices)
#     for index, price in enumerate(prices):
#         index_arr.append(index)
#         if index == 0:
#             continue
#         for e, value in enumerate(index_arr):
#             print(
#                 "index_arr", index_arr, "value", value, "result_arr", result_arr, price
#             )
#             if e == len(index_arr) - 1:
#                 break
#             if price >= prices[value]:
#                 result_arr[value] += 1
#             else:
#                 index_arr.pop(value)
#     return result_arr


# print(solution(prices))


def solution(prices):
    n = len(prices)
    result = [0] * n
    stack = []  # 아직 기간이 확정되지 않은 인덱스들

    for i, price in enumerate(prices):
        # 가격이 떨어졌을 때 이전 가격들의 기간을 확정
        while stack and prices[stack[-1]] > price:
            j = stack.pop()
            result[j] = i - j
        stack.append(i)

    # 끝까지 안 떨어진 경우 처리
    while stack:
        j = stack.pop()
        result[j] = n - 1 - j

    return result


"""''
stack [0] 스텍

price 2
stack [0,1]

price 3
stack [0,1,2]

price 2
j = 2
result [0,0,1,0,0]
stack [0.1.3]

price 3
stack [0,1,3,4]

j = 4
result [0,0,1,0,0]
j = 3
result [0,0,1,1,0]
j = 1
result [0,3,1,0,0]
j = 0
result [4,3,1,0,0]  
             



""" ""

"""''
[1,2,3,2,3]

[1]
[1,2]
[1,2,3]
[1,2,3]

[1, 2, 3, 2, 3]
now = 1
index arr = [0]
[0]

now = 2
index arr = [0,1]
[1, 0]
""" ""


# from collections import deque

# arr = [1, 2, 3, 4, 5]
# dq = deque(arr)
# print(dq.appendleft(10))
# print(dq)
# print(list(dq))
