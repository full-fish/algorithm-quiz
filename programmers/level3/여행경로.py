tickets = [
    ["ICN", "JFK"],
    ["ICN", "JFK"],
    ["JFK", "HND"],
    ["HND", "ICN"],
    ["JFK", "ATL"],
]
#  ["ICN", "JFK", "HND", "ICN", "JFK", "ATL"]
# obj {'ICN': ['JFK', 'JFK'], 'JFK': ['HND', 'ATL'], 'HND': ['ICN']}


def solution(tickets):
    result = []
    obj = {}

    for a, b in tickets:
        obj.setdefault(a, []).append(b)

    for v in obj.values():
        v.sort(reverse=True)

    stack = ["ICN"]

    while stack:
        current = stack[-1]

        if obj.get(current):
            stack.append(obj[current].pop())
        else:
            result.append(stack.pop())
    return result[::-1]


print(solution(tickets))
a = {}
a.get("b", []).append("10")
a.setdefault("b", []).append("10")
print(a)
