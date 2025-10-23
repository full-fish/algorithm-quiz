m = "CC#BCC#BCC#BCC#B"
musicinfos = ["23:58,00:10,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]

from datetime import datetime


def shop_convert(arr):
    srt = ""
    for i, e in enumerate(arr):
        # 마지막이면
        if len(arr) - 1 == i:
            srt += e
        else:
            srt += e[:-1]
            srt += e[-1].lower()
    return srt


def solution(m, musicinfos):
    result = []
    musicinfos = [musicinf.split(",") for musicinf in musicinfos]
    for i, musicinfo in enumerate(musicinfos):
        t1_s, t2_s, name, play = musicinfo

        changed_play = shop_convert(play.split("#"))
        changed_m = shop_convert(m.split("#"))

        t1 = datetime.strptime(t1_s, "%H:%M")
        t2 = datetime.strptime(t2_s, "%H:%M")

        if t1 > t2:
            t2 = datetime.strptime("00:00", "%H:%M")

        time = ((t2 - t1)).seconds // 60

        repit = time // len(changed_play)
        remainder = time % len(changed_play)
        play_song = changed_play * repit + changed_play[:remainder]

        if changed_m in play_song:
            result.append([name, time, i])

    return sorted(result, key=lambda x: (-x[1], x[2]))[0][0] if result else "(None)"


print(solution(m, musicinfos))
