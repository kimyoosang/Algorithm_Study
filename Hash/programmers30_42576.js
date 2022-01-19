//https://programmers.co.kr/learn/courses/30/lessons/42576
//완주하지 못한 선수

//1. 제출한 답안
function solution(participant, completion) {
  participant.sort()
  completion.sort()

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i] //여기서 바로 return
    }
  }
}

//2. 1번과 별차이 없어보이는데 효율성 테스트에서 아주 약간 더 느렸음
function solution(participant, completion) {
  var answer = ''
  participant.sort()
  completion.sort()

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i]
      break
    }
  }
  return answer
}
