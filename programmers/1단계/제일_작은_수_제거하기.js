// 내답다답동일 splice쓴 사람들 종종 보임
function solution(arr) {
    let result = arr.filter((i) => i !== Math.min(...arr))
    return result.length ? result : [-1] 
}