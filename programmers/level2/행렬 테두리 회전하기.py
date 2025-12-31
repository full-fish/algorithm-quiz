rows = 6
columns = 6
queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]


def solution(rows, columns, queries):
    result = []
    queries = [[i - 1 for i in querie] for querie in queries]
    n = 1
    arr = []
    # 배열 생성
    for _ in range(rows):
        temp = []
        for _ in range(columns):
            temp.append(n)
            n += 1
        arr.append(temp)

    for querie in queries:
        temp_arr, min = circel(arr, querie)
        arr = temp_arr
        result.append(min)

    return result


def circel(arr, q):
    n = 2 * (q[2] - q[0] + 1) + 2 * (q[3] - q[1] + 1) - 4
    save_n = arr[q[0]][q[1]]
    now = [q[0], q[1]]
    case = 0
    dxy = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    min = save_n
    for i in range(n):
        next = [x + y for x, y in zip(now, dxy[case])]
        if i == n - 1:
            arr[now[0]][now[1]] = save_n
            break
        next_cell = arr[next[0]][next[1]]
        if min > next_cell:
            min = next_cell
        arr[now[0]][now[1]] = next_cell
        now = next
        if case == 0 and next[0] == q[2]:
            case += 1
        elif case == 1 and next[1] == q[3]:
            case += 1
        elif case == 2 and next[0] == q[0]:
            case += 1
    return [arr, min]


print(solution(rows, columns, queries))
