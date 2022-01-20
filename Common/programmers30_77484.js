//https://programmers.co.kr/learn/courses/30/lessons/77484
//로또의 최고순위와 최저순위

//1. 가장 먼저 푼 방법
function solution(lottos, win_nums) {
  var answer = []
  let winning = [6, 6, 5, 4, 3, 2, 1]
  let count = 0
  let zero = 0
  lottos.sort((a, b) => a - b)
  win_nums.sort((a, b) => a - b)

  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === 0) {
        zero++
        break
      }
      if (lottos[i] === win_nums[j]) {
        count++
      }
    }
  }
  answer.push(winning[count + zero], winning[count])

  return answer
}
