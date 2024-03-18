// 리듀스를 활용한 방법
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0)
}

// 내답다답 거의 같음
function solution(absolutes, signs) {
    let sum = 0
    
    for(let i=0; i<signs.length; i++){
        sum += absolutes[i] * (signs[i] ? 1 : -1)
    }
    
    return sum
}