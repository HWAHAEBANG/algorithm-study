// 내답다답 동일
function solution(arr, divisor) {
    let result = arr.filter((i)=> i % divisor === 0).sort((a,b) => a - b)
    return result.length ? result : [-1]
}