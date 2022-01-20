//https://programmers.co.kr/learn/courses/30/lessons/81301
//숫자 문자열과 영단어

//1. 처음 푼 문제
function solution(s) {
  var answer = ''
  let word = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let str = ''

  for (let i = 0; i < s.length; i++) {
    if (!Number(s[i])) {
      //문자일때
      if (word.indexOf(str + s[i]) !== -1) {
        //이전+현재 문자열이 word에 대응값이 있을 때
        let idx = word.indexOf(str + s[i])
        answer += num[idx]
        str = ''
      } else {
        //대응값 없으면 계속 문자열 더하기
        str += s[i]
      }
    }
    if (Number(s[i]) || s[i] === '0') {
      // 숫자일때
      answer += s[i]
    }
  }
  if (Number(answer)) {
    answer = Number(answer)
  }
  return answer
}

//2. 다른 사람들 답안을 보니까 정규표현식으로 간단하게 푼것이 있음. 정규표현식 공부해서 다시 풀어보기
