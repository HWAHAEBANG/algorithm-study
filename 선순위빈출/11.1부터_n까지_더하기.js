function solution(n){
    return n !== 1 ? n + solution(n-1) : 1 
}

console.log(solution(5));

// 팩토리얼
function factorial(n){
    return n ? n * factorial(n-1) : 1 
}

console.log(factorial(5));

