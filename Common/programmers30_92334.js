//https://programmers.co.kr/learn/courses/30/lessons/92334
//신고 결과 받기

const id_list = ['muzi', 'frodo', 'apeach', 'neo']
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
]
const k = 2

function solution(id_list, report, k) {
  var answer = []
  let objReport = {}
  report = [...new Set(report)]
  let reportedId = report.map((el) => el.split(' ')[1])
  let reportId = report.map((el) => el.split(' ')[0])

  for (let i = 0; i < report.length; i++) {
    if (objReport[reportedId[i]] === undefined) {
      objReport[reportedId[i]] = [reportId[i]]
    } else {
      objReport[reportedId[i]] = [...objReport[reportedId[i]], reportId[i]]
    }
  }
  let re = Object.values(objReport).length
  console.log('길이#####', Object.values(objReport).length)
  for (let i = 0; i < Object.values(objReport).length; i++) {
    console.log('ㅁ')
  }

  return answer
}
solution(id_list, report, k)

// function solution(id_list, report, k) {
//   var answer = new Array(id_list.length).fill(0)

//   report = [...new Set(report)]
//   let reportedId = report.map((el) => el.split(' ')[1])
//   let reportId = report.map((el) => el.split(' ')[0])

//   let final = []

//   for (let i = 0; i < reportedId.length; i++) {
//     answer[id_list.indexOf(reportedId[i])]++
//   }
//   answer.forEach((el, idx) => {
//     if (el >= k) {
//       final.push(id_list[idx]) //[frode,neo]
//     }
//   })
//   answer.fill(0)
//   reportedId.forEach((el, idx) => {
//     // [ 'frodo', 'frodo', 'neo', 'neo', 'muzi' ]
//     if (final.includes(el)) {
//       answer[id_list.indexOf(reportId[idx])]++
//     }
//   })
//   return answer
// }

// //1.누가 몆번 신고당했는지 배열에 숫자로 저장,순서는 id_list순서랑 똑같이
// //2.1번에서 나온 배열을 가지고 신고당한 수가 k이상이면 그 사람들의 ID를 저장
// //3.report를 돌면서 k번이상 신고당한 사람을 신고한 ID를 찾아서 id_list에 index랑 맞춰서 값을 0에서부터 ++
// function solution(id_list, report, k) {
//   var answer = []
//   report = [...new Set(report)] //중복제거

//   const delId = reportedId(id_list, report, k)

//   function reportedId(id_list, report, k) {
//     answer = new Array(id_list.length).fill(0)
//     let result = []

//     report.forEach((el, idx) => {
//       answer[id_list.indexOf(el.split(' ')[1])]++
//     })
//     answer.forEach((el, idx) => {
//       if (el >= k) {
//         result.push(id_list[idx])
//       }
//     })
//     answer.fill(0)
//     return result
//   }

//   function ResultList() {
//     let reported = report.map((el) => el.split(' ')[1])
//     let reportId = report.map((el) => el.split(' ')[0])

//     reported.forEach((el, idx) => {
//       if (delId.includes(el)) {
//         answer[id_list.indexOf(reportId[idx])]++
//       }
//     })
//   }
//   ResultList()

//   return answer
// }
