# mats = [5, 3, 2, 4]
# park = [
#     ["A", "A", "-1", "B", "B", "B", "B", "-1"],
#     ["A", "A", "-1", "B", "B", "B", "B", "-1"],
#     ["-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"],
#     ["D", "D", "-1", "-1", "-1", "-1", "E", "-1"],
#     ["D", "D", "-1", "-1", "-1", "-1", "-1", "F"],
#     ["D", "D", "-1", "-1", "-1", "-1", "E", "-1"],
# ]

# park = [["-1", "-1", "-1"], ["-1", "-1", "-1"], ["-1", "-1", "-1"]]
# mats = [1, 2, 3]

park = [
    ["-1", "-1", "-1", "-1"],
    ["X", "-1", "-1", "-1"],  # ← (1,1)에서 시작하면 가능한데,
    ["-1", "-1", "-1", "-1"],
    ["-1", "-1", "-1", "-1"],
]
mats = [2]


def solution(mats, park):
    row_park_len = len(park[0])
    col_park_len = len(park)
    mats.sort()
    pointer = 0
    result = 0

    def looping(row_index, col_index):
        for i in range(row_index, mats[pointer] + row_index, 1):
            for j in range(col_index, mats[pointer] + col_index, 1):
                if i >= col_park_len or j >= row_park_len or park[i][j] != "-1":
                    return 0
        return mats[pointer]

    for row_index, line in enumerate(park):
        for col_index, square in enumerate(line):
            if square != "-1":
                continue
            else:
                while 1:
                    temp = looping(row_index, col_index)
                    if temp:

                        result = temp
                        if pointer == len(mats) - 1:
                            break
                        pointer += 1
                        continue
                    break
    return result if result > 0 else -1


print(solution(mats, park))

# ---------------------------------------- 다른 사람 풀이 all을 써서 빠름


def solution(mats, park):

    def can_place_mat(park, size):
        # 공원의 행(row)와 열(col) 길이
        # park에서 주어진 size의 돗자리를 놓을 수 있는지 확인
        for i in range(rows - size + 1):
            for j in range(cols - size + 1):
                # size x size 크기의 공간이 모두 '-1'인지 확인
                if all(
                    park[x][y] == "-1"
                    for x in range(i, i + size)
                    for y in range(j, j + size)
                ):
                    return True
        return False

    rows, cols = len(park), len(park[0])

    # 돗자리 크기 내림차순으로 정렬
    mats.sort(reverse=True)

    # 각 돗자리 크기에 대해 놓을 수 있는지 확인
    for size in mats:
        if can_place_mat(park, size):
            return size

    return -1
