import math

def solution(signals):
    return next(
        (
            t for t in range(1, math.lcm(*[sum(s) for s in signals]) + 1)
            if all(
                s[0] <= (t - 1) % sum(s) < s[0] + s[1]
                for s in signals
            )
        ),
        -1
    )