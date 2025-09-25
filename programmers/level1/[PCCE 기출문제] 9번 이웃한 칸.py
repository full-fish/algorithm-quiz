def solution(board, h, w):
    length = len(board)
    result = 0
    dh = [1, 0, -1, 0]
    dw = [0, 1, 0, -1]
    for i in range(4):
        h_check = h + dh[i]
        w_check = w + dw[i]
        if (
            0 <= h_check < length
            and 0 <= w_check < length
            and board[h][w] == board[h_check][w_check]
        ):
            result += 1
    return result
