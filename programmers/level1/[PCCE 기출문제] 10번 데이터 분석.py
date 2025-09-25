data = [[1, 20300104, 100, 80], [2, 20300804, 847, 37], [3, 20300401, 10, 8]]
ext = "date"
val_ext = 20300501
sort_by = "remain"
result = [[3, 20300401, 10, 8], [1, 20300104, 100, 80]]


def solution(data, ext, val_ext, sort_by):
    type_arr = ["code", "date", "maximum", "remain"]
    target_ext_index = type_arr.index(ext)
    target_sort_by_index = type_arr.index(sort_by)
    filteredData = sorted(
        list(filter(lambda x: x[target_ext_index] < val_ext, data)),
        key=lambda x: x[target_sort_by_index],
    )
    return filteredData


print(solution(data, ext, val_ext, sort_by))
