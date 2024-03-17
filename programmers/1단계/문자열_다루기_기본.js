// all정규식 사용
function solution(s) {
    return /^\d{6}$|^\d{4}$/.test(s)
}

// 다답 isNaN 사용 // 막힌 답
function solution(s) {
    let len =  s.length === 4 || s.length === 6 ? true : false
    // let onlyNum = Number(s) ? true : false  // 이렇게 하면 안됨. 빈 문자열이면 0를 반환함
    let onlyNum = !isNaN(s) // 지수형식("1e22") 에 막힘.
    
    return len && onlyNum;
}


// 내답 다답 조금 유사
function solution(s) {
    let len =  s.length === 4 || s.length === 6 ? true : false
    // let onlyNum = Number(s) ? true : false  // 이렇게 하면 안됨. 빈 문자열이면 0를 반환함
    let onlyNum = /^\d+$/.test(s)
    
    return len && onlyNum;
}