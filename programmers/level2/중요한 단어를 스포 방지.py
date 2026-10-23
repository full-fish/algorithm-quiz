message = "here is muzi here is a secret message"
spoiler_ranges = [[0, 3], [23, 28]]

message2 = "my phone number is 01012345678 and may i have your phone number"
spoiler_ranges2 = [[5, 5], [25, 28], [34, 40], [53, 59]]
# print(re.search("here", message).span())
# print(re.findall("here", message))
# print([m.span() for m in re.finditer("here", message)])
# print([m.span() for m in re.finditer(rf"\bi\b", message2#

import re

# def solution(message, spoiler_ranges):
#     dic = {}
#     dic_c = {}
#     for word in message.split(" "):
#         if not word:
#             continue
#         dic_c[word] = dic_c.get(word, -1) + 1
#         if dic_c[word] > 0 and not dic[word]:
#             continue
#         word_s, word_e = [m.span() for m in re.finditer(rf"\b{word}\b", message)][
#             dic_c[word]
#         ]
#         for range_s, range_e in spoiler_ranges:
#             if range_s <= word_e - 1 and range_e >= word_s:
#                 dic[word] = True
#                 break
#             else:
#                 dic[word] = False
#     return sum(dic.values())


def solution(message, spoiler_ranges):
    spoil, normal = set(), set()
    pos = 0  # 현재 단어의 시작 위치
    r = 0  # 지금 확인 중인 스포 구간
    for word in message.split(" "):
        s, e = pos, pos + len(word) - 1
        while r < len(spoiler_ranges) and spoiler_ranges[r][1] < s:
            r += 1  # 이미 지나간 구간은 건너뛰기
        if r < len(spoiler_ranges) and spoiler_ranges[r][0] <= e:
            spoil.add(word)
        else:
            normal.add(word)
        pos = e + 2  # 단어 끝 + 공백 1칸
    print(spoil)
    print(normal)
    return len(spoil - normal)  # 스포 구간에서만 나온 단어


# print(solution(message, spoiler_ranges))
print("---")
print(solution(message2, spoiler_ranges2))

# 범위보고 범위사이 겹치면 중요단어 모두 겹쳐야함  phone, 01012345678, may, i
