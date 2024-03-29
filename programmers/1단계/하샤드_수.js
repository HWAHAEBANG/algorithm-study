//내답다답동일 근데 숫자로 해서 속도우선 한 경우 많이 보임.
function solution(x) {
    let sum = x.toString().split('').reduce((acc, cur) => acc + Number(cur),0)
    return x % sum ? false : true
}