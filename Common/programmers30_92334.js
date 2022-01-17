//https://programmers.co.kr/learn/courses/30/lessons/92334
//신고 결과 받기

function solution(id_list, report, k) {
    
    var answer = new Array(id_list.length).fill(0)
    
    report = [... new Set(report)]
    let reportedId = report.map(el => el.split(' ')[1])
    let reportId = report.map(el=>el.split(' ')[0])
    
    let final = []
    
    for(let i=0; i<reportedId.length; i++) {
        answer[id_list.indexOf(reportedId[i])]++
    }
    answer.forEach((el,idx) => {
        if(el >= k) {
            final.push(id_list[idx]) //[frode,neo]
        }
    })
    answer.fill(0)
    reportedId.forEach((el,idx) => { //	[ 'frodo', 'frodo', 'neo', 'neo', 'muzi' ]
        if(final.includes(el)) {
            answer[id_list.indexOf(reportId[idx])]++
        }
    })
    return answer;
}