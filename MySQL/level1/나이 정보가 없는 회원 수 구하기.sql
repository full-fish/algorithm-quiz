-- COUNT 함수를 사용할 때는 전체(*)를 대상으로 할 때 주의해야 합니다. 
-- COUNT(*)는 NULL 값을 포함하고 
-- COUNT(AGE)와 같이 특정 컬럼을 지정해줄 경우 NULL 값을 포함하지 않기 때문입니다
SELECT COUNT(USER_ID) AS USERS
FROM USER_INFO
WHERE AGE IS NULL;

-- ? 다른 풀이
SELECT SUM(AGE IS NULL) AS USERS
FROM USER_INFO;