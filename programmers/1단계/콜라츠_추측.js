//내답 양호 다답 while문도 많았음. 어떤게 더 효율적인지
function solution(num, cnt) {
    cnt = cnt || 0
    if(cnt >= 500) return -1
    if(num === 1) return cnt
    
    if(num % 2 === 0) return solution(num/2, ++cnt)
    else return solution(num*3+1, ++cnt)
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));