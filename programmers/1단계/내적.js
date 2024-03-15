// .내답다답동일 더 나은듯
function solution(a, b) {
    return a.reduce((acc, cur, idx) => acc + cur * b[idx] , 0)
}