gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]
gems2 = ["AA", "AB", "AC", "AA", "AC"]
gems3 = ["XYZ", "XYZ", "XYZ"]
gems4 = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"]


# def solution(gems):
#     gems_length = len(gems)
#     # 객체 생성
#     origin_obj = {}
#     for gem in gems:
#         if not (gem in origin_obj):
#             origin_obj[gem] = True
#     origin_obj_key_length = len(origin_obj)

#     result_obj = {}
#     result_range = [0, float("inf")]
#     pointer_1 = 0
#     pointer_2 = 0

#     while True:
#         result_obj_key_length = len(result_obj)
#         if pointer_2 > gems_length - 1:
#             break
#         # 모든 보석

#         if origin_obj_key_length == result_obj_key_length:

#             # 더 범위가 짧다면
#             if result_range[1] - result_range[0] > pointer_2 - pointer_1:
#                 result_range = [pointer_1, pointer_2 - 1]
#             temp_key = gems[pointer_1]
#             result_obj[temp_key] -= 1
#             if result_obj[temp_key] == 0:
#                 del result_obj[temp_key]
#             pointer_1 += 1

#         else:
#             if not (gems[pointer_2] in result_obj):
#                 result_obj[gems[pointer_2]] = 1
#             else:
#                 result_obj[gems[pointer_2]] += 1
#             pointer_2 += 1
#         print(
#             "pointer_1",
#             pointer_1,
#             "pointer_2",
#             pointer_2,
#             origin_obj_key_length,
#             result_obj_key_length,
#         )
#     return list(map(lambda x: x + 1, result_range))


def solution(gems):
    gems_len = len(gems)
    gem_kind_len = len(set(gems))

    result_obj = {}
    result_range = (0, float("inf"))
    left = 0
    right = 0

    while True:
        # 모든 보석
        if gem_kind_len == len(result_obj):
            # 더 범위가 짧다면
            if result_range[1] - result_range[0] > right - left:
                result_range = (left, right)
            temp_key = gems[left]
            result_obj[temp_key] -= 1
            if result_obj[temp_key] == 0:
                del result_obj[temp_key]
            left += 1
            # rgith는 이미 오른쪽 최대에서 1칸 넘어간 상태 && 모든 보석 아님
        elif right == gems_len:
            break
        else:
            temp_key = gems[right]
            result_obj[temp_key] = result_obj.get(temp_key, 0) + 1
            right += 1
    return [result_range[0] + 1, result_range[1]]


print(solution(gems))
print(solution(gems2))
print(solution(gems3))
print(solution(gems4))
"""''
모든 보석을 모은 상태라면 더 줄일 수 있는지 확인 위해 point1 --
모든 보석을 모으지 않은 상태라면 point2 ++
"""
