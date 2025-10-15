m = 6
n = 6
board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]


def solution(m, n, board):
    def traverse(board):
        remove_arr = set()

        # 2x2애들 중복없이 넣기
        for row_index, row in enumerate(board[:-1]):
            for i, e in enumerate(row[:-1]):
                if (
                    e
                    == board[row_index][i + 1]
                    == board[row_index + 1][i]
                    == board[row_index + 1][i + 1]
                    is not None
                ):
                    remove_arr.update(
                        [
                            (row_index, i),
                            (row_index, i + 1),
                            (row_index + 1, i),
                            (row_index + 1, i + 1),
                        ]
                    )
        return remove_arr

    def drop_down(arr):
        m, n = len(arr), len(arr[0])
        for y in range(n):  # 열 단위
            write = m - 1  # 아래에서부터 채울 위치
            for x in range(m - 1, -1, -1):  # 아래→위 스캔
                v = arr[x][y]
                if v is not None:
                    arr[write][y] = v
                    if write != x:
                        arr[x][y] = None
                    write -= 1
            # 위에 남은 칸 None 채우기
            for x in range(write, -1, -1):
                arr[x][y] = None

    arr = [list(e) for e in board]

    while True:

        remove_arr = sorted(traverse(arr))
        if not remove_arr:
            break
        # 없앨 애들 없애기
        for x, y in remove_arr:
            arr[x][y] = None

        drop_down(arr)

    return len([True for row in arr for v in row if v is None])


print(solution(m, n, board))
