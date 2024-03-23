// 내답다답 동일
function solution(t, p) {
    let n = t.length
    let cnt = 0
    for(let i=0; i<n-p.length+1; i++){
        // if(parseInt(t.slice(i,i+p.length)) <= parseInt(p)) cnt ++ 
        if(+t.slice(i,i+p.length) <= +p) cnt ++ // +붙여서 타입 변경해주는 것도 편리
    }
    return cnt
}