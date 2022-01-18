//https://programmers.co.kr/learn/courses/30/lessons/42748
//K번째 수 찾기

function solution(array, commands) {
  var answer = []

  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1
    let end = commands[i][1]
    let sliceArr = array.slice(start, end).sort((a, b) => a - b)
    let k = commands[i][2] - 1

    if (sliceArr[k]) {
      answer.push(sliceArr[k])
    }
  }
  return answer
}
