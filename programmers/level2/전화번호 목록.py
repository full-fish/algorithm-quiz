phone_book = ["119", "97674223", "1195524421"]


def solution(phone_book):
    hash_map = {}

    for num in phone_book:
        hash_map[num] = True
    for num in phone_book:
        temp = ""
        for char in num[:-1]:
            temp += char
            if temp in hash_map:
                return False
    return True


print(solution(phone_book))
print([1, 2, 3, 4][:-1])
