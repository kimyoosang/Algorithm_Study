//https://programmers.co.kr/learn/courses/30/lessons/42748
//K번째 수 찾기

//1. 가장 먼저 푼 방법
function solution(array, commands) {
  var answer = []

  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1
    let end = commands[i][1]
    //sort()는 문자열을 정렬한다고 가정한다. 숫자를 정렬 할 때 기본 동작은 올바르게 정렬되지 않는다
    //그래서 sort((a, b) => a - b)로 숫자를 정렬 해야한다
    let sliceArr = array.slice(start, end).sort((a, b) => a - b)
    let k = commands[i][2] - 1

    if (sliceArr[k]) {
      answer.push(sliceArr[k])
    }
  }
  return answer
}

//2. 다른 방법, 1번 보다 속도가 약간 더 빠름
function solution(array, commands) {
  var answer = []
  commands.forEach((arr) => {
    answer.push(
      array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1]
    )
  })
  return answer
}
