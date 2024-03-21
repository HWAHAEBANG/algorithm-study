// 내답다답동일
function solution(n) {
    let a = n.toString().split('').sort((a,b) => b - a).join('')
    return parseInt(a)
}