n = 9
wires = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]

from collections import Counter


def solution(n, wires):
    arr = [[] for _ in range(n + 1)]
    print(arr)

    for wire in wires:

        arr[wire[0]].append(wire[1])
        arr[wire[1]].append(wire[0])
    print(arr)

    return 1


print(solution(n, wires))
