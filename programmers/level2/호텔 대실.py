book_time = [
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
]

"""
sort후 나가는 시간만 

""" ""


def solution(book_time):
    def time_to_minutes(time):
        a, b = map(int, time.split(":"))
        return a * 60 + b + 10

    book_time_changed = sorted(
        [[time_to_minutes(x[0]), time_to_minutes(x[1])] for x in book_time],
        key=lambda x: (x[0], x[1]),
    )
    heap = []
    for book_index, book_ele in enumerate(book_time_changed):
        if not (heap):
            heap.append(book_ele[1])
        else:
            min_index, min_value = min(enumerate(heap), key=lambda x: x[1])
            if book_ele[0] >= min_value:
                del heap[min_index]
            heap.append(book_ele[1])
    return len(heap)


print(solution(book_time))
# a, b = ["15:10"][0].split(":")
# print(a, b)
# print(["15:10"][0].split(":"))
