// 내답다답동일
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ?  (Math.sqrt(n)+1) ** 2 : -1 
}