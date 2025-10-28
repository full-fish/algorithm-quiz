def solution(key, lock):
    key_row_len, key_col_len = len(key), len(key[0])
    lock_row_len, lock_col_len = len(lock), len(lock[0])

    # 자물쇠 튀어나갈 수 있는 큰 보드 생성
    board = [
        [0 for _ in range(lock_col_len + 2 * key_col_len - 2)]
        for _ in range(lock_row_len + 2 * key_row_len - 2)
    ]

    # 보드중앙에 자물쇠 할당, 자물쇠 맞춰야 하는곳 좌표
    # set을 쓰면 in검색시 O(1)
    lock_target = set()
    not_lock_target = set()
    for row_i, row in enumerate(lock):
        for ceel_i, cell in enumerate(row):
            row, col = key_row_len - 1 + row_i, key_col_len - 1 + ceel_i
            board[row][col] = cell
            if cell == 0:
                lock_target.add((row, col))
            else:
                not_lock_target.add((row, col))
    print(board)

    # 키 회전 4개 만들기
    rotated_keys = [key]
    for _ in range(3):
        rotated_keys.append([list(row) for row in zip(*rotated_keys[-1][::-1])])

    # 키 돌기부분 좌표 4개 만들기
    target_keys = []
    for rotated_key in rotated_keys:
        temp = {
            (row_i, cell_i)
            for row_i, row in enumerate(rotated_key)
            for cell_i, cell in enumerate(row)
            if cell == 1
        }
        target_keys.append(temp)

    # 전체 순회
    for target_key in target_keys:
        for i in range(key_row_len + lock_row_len + 1):
            for j in range(key_col_len + lock_col_len + 1):
                moved = {(row + i, col + j) for (row, col) in target_key}
                if moved & not_lock_target:
                    continue
                if moved >= lock_target:
                    return True

    return False


print(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))
# 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0
# 0 0 0 0 0 0 0
