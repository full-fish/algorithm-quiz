def solution(board):
    board = [list(row) for row in board]
    rotationed_board = [list(row) for row in zip(*board[::-1])]

    lines = []
    for i in range(3):
        lines.append("".join(board[i]))
        lines.append("".join(rotationed_board[i]))

    lines.append(board[0][0] + board[1][1] + board[2][2])
    lines.append(board[2][0] + board[1][1] + board[0][2])

    O_count = sum(row.count("O") for row in board)
    X_count = sum(row.count("X") for row in board)

    O_win = any(line == "OOO" for line in lines)
    X_win = any(line == "XXX" for line in lines)

    if O_win and X_win:
        return 0
    elif not (O_count == X_count or O_count == X_count + 1):
        return 0
    elif O_win and O_count != X_count + 1:
        return 0
    elif X_win and O_count != X_count:
        return 0

    return 1


print(solution(["O.X", ".O.", "..X"]))

"""
O가 이긴다면 X보다 1개 더 많아야함
X가 이긴다면 O랑 같아야함
두 상관 제외하고 누가 이긴게 나오면 있을 수 없는 상황
둘다 이길 순 없음

""" ""
