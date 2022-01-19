//https://programmers.co.kr/learn/courses/30/lessons/64061
//크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0
  let result = []

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let now = moves[i]
      if (board[j][now - 1] !== 0) {
        //moves[i]에 있는 숫자가 index+1 이므로 그 숫자만큼을 뺀 값을 맨 위에서부터 차례대로 탐색
        result.push(board[j][now - 1])
        board[j][now - 1] = 0
        break
      }
    }
    if (result.length >= 2) {
      if (result[result.length - 1] === result[result.length - 2]) {
        //쌓인 것들의 길이가 2이상이 되면 위에서부터 바로 밑에 똑같은게 있는지 탐색
        answer += 2
        result.splice(result.length - 2, 2)
      }
    }
  }
  return answer
}
