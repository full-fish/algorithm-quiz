board = [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]


#! 최악 O(R×C×S²)
# def solution(board):
#     large = 0
#     r_n, c_n = len(board), len(board[0])

#     def check(r_i, c_i, size):
#         if not (r_n > r_i + size and c_n > c_i + size):
#             return False
#         for n in range(size - 1, -1, -1):
#             if board[r_i + size][c_i + n] != 1 or board[r_i + n][c_i + size] != 1:
#                 return False
#         if board[r_i + size][c_i + size] != 1:
#             return False
#         return True

#     for r_i, row in enumerate(board):
#         for c_i, cell in enumerate(row):
#             if cell == 1:
#                 size = 0
#                 while check(r_i, c_i, size):
#                     size += 1
#                 large = max(large, size)

#     return large**2


#! O(R×C)
def solution(board):
    r, c = len(board), len(board[0])
    dp = [[0 for _ in range(c)] for _ in range(r)]
    print("dp", dp)

    large = 0

    for i in range(r):
        for j in range(c):
            if board[i][j] == 1:
                if i == 0 or j == 0:
                    dp[i][j] = 1
                else:
                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                large = max(large, dp[i][j])
    return large**2


print(solution(board))
for n in range(4):
    print(n)
