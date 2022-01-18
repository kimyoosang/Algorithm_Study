//https://programmers.co.kr/learn/courses/30/lessons/92334
//신고 결과 받기

//1. 가장 빠른 방법
function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0)

  report = [...new Set(report)]
  let reportedId = report.map((el) => el.split(' ')[1])
  let reportId = report.map((el) => el.split(' ')[0])

  let final = []

  for (let i = 0; i < reportedId.length; i++) {
    answer[id_list.indexOf(reportedId[i])]++
  }
  answer.forEach((el, idx) => {
    if (el >= k) {
      final.push(id_list[idx]) //[frode,neo]
    }
  })
  answer.fill(0)
  reportedId.forEach((el, idx) => {
    // [ 'frodo', 'frodo', 'neo', 'neo', 'muzi' ]
    if (final.includes(el)) {
      answer[id_list.indexOf(reportId[idx])]++
    }
  })
  return answer
}

// 2번째로 빠른 방법
function solution(id_list, report, k) {
  var answer = []
  report = [...new Set(report)] //중복제거

  const delId = reportedId(id_list, report, k)

  function reportedId(id_list, report, k) {
    answer = new Array(id_list.length).fill(0)
    let result = []

    report.forEach((el, idx) => {
      answer[id_list.indexOf(el.split(' ')[1])]++
    })
    answer.forEach((el, idx) => {
      if (el >= k) {
        result.push(id_list[idx])
      }
    })
    answer.fill(0)
    return result
  }

  function ResultList() {
    let reported = report.map((el) => el.split(' ')[1])
    let reportId = report.map((el) => el.split(' ')[0])

    reported.forEach((el, idx) => {
      if (delId.includes(el)) {
        answer[id_list.indexOf(reportId[idx])]++
      }
    })
  }
  ResultList()

  return answer
}

// 3. 가장 느리고 말도 안되게 느린 방법(1번에 비해 2~20배 느림)
function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0)

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

  for (let i = 0; i < Object.values(objReport).length; i++) {
    if (Object.values(objReport)[i].length >= k) {
      Object.values(objReport)[i].forEach((el) => answer[id_list.indexOf(el)]++)
    }
  }

  return answer
}
