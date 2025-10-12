players = [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5]
m = 3
k = 5


def solution(players, m, k):
    total_server = 0
    current_server_arr = []

    for i, e in enumerate(players):
        need_server = e // m
        while current_server_arr and current_server_arr[0] == i - k:
            current_server_arr.pop(0)
        while need_server > len(current_server_arr):
            total_server += 1
            current_server_arr.append(i)
    return total_server


print(solution(players, m, k))
