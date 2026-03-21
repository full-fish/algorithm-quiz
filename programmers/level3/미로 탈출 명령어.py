#
#! 이거 안되네 생각해보니 E에 먼저가면 안됨 E 가기전에 d로 더 k털 수도 있음
def solution(n, m, x, y, r, c, k):
    # d l r u
    result = ""
    while k > 0 and not (x == r and y == c):
        if x < r:
            move = r - x
            x += move
            k -= move
            result += "d" * move
        elif y > c:
            move = y - c
            y -= move
            k -= move
            result += "l" * move
        elif y < c:
            move = c - y
            y += move
            k -= move
            result += "r" * move
        elif x > r:
            move = x - r
            x -= move
            k -= move
            result += "u" * move
    if k % 2 == 1:
        return "impossible"

    while k > 0:
        print(k)

        can_move_d = n - 1 - x if k // 2 >= n - 1 - x else k // 2
        can_move_u = x - 1 if k // 2 >= x - 1 else k // 2
        can_move_l = m - 1 - y if k // 2 >= m - 1 - y else k // 2
        can_move_r = y - 1 if k // 2 >= y - 1 else k // 2
        if can_move_d > 0:
            x += can_move_d
            k -= can_move_d
            result += "d" * can_move_d
            x -= can_move_u
            k -= can_move_u
            result += "u" * can_move_u

        elif can_move_l > 0:
            y -= can_move_l
            k -= can_move_l
            result += "l" * can_move_l
            y += can_move_r
            k -= can_move_r
            result += "r" * can_move_r

        elif can_move_r > 0:
            y += can_move_r
            k -= can_move_r
            result += "r" * can_move_r
            y -= can_move_l
            k -= can_move_l
            result += "l" * can_move_l

        if can_move_u > 0:
            x -= can_move_u
            k -= can_move_u
            result += "u" * can_move_u
            x += can_move_d
            k -= can_move_d
            result += "d" * can_move_d
    return result


print(solution(3, 4, 2, 3, 3, 1, 5))
