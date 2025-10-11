storey = 789  # 5


def solution(storey):
    count = 0
    arr = [int(e) for e in str(storey)][::-1]
    arr.append(0)

    for i, v in enumerate(arr):
        if v >= 6:
            count += 10 - v
            arr[i + 1] += 1
        elif v == 5:
            if arr[i + 1] >= 5:
                count += 10 - v
                arr[i + 1] += 1
            else:
                count += v
        else:
            count += v
    return count


"""''
  6이상 층수 올림
  층수를 올리면 그 윗단계도 1늘어나는거 생각
  편하게 하기위해 역순
  마지막 요소의 경우에는 그 윗단계 늘릴 레인지 안되니까 count++
  5일 경우에는 다음 자리 숫자에 따라 분기

  6이상 뒷자리 늘리고
  4이하 그냥 카운터++
  5면 뒷자리가 5이상일때
""" ""


print(solution(storey))
print(solution(9))
print(solution(999))
print(solution(10))
print(solution(2554))
