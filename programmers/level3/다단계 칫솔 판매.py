enroll = ["john"]
referral = ["-"]
seller = ["john"]
amount = [12]


def solution(enroll, referral, seller, amount):
    obj = {}
    for i, e in enumerate(enroll):
        obj[e] = [referral[i], 0]

    def traversal(node, cost):
        next_node = obj[node][0]
        payment_cost = 0

        payment_cost = 0 if cost * 0.1 < 1 else int(cost * 0.1)
        obj[node][1] += cost - payment_cost
        if next_node == "-" or payment_cost == 0:
            return
        traversal(next_node, payment_cost)

    for i, node in enumerate(seller):
        traversal(node, amount[i] * 100)
    return [v[1] for v in obj.values()]


print(solution(enroll, referral, seller, amount))
a = 1200
b = a * 0.9
c = a - b
d = c * 0.9
e = c - d

# print(a, b, c, d, e)
