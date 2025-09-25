def solution(wallet, bill):
    answer = 0
    wallet.sort()
    while 1:
        bill.sort()
        if wallet[0] >= bill[0] and wallet[1] >= bill[1]:
            break
        else:
            bill[1] //= 2
            answer += 1
    return answer
