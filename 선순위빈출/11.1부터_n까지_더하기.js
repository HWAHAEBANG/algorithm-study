function solution(n){
    return n !== 1 ? n + solution(n-1) : 1 
}

console.log(solution(5));

// 팩토리얼
function factorial(n){
    return n ? n * factorial(n-1) : 1 
}

console.log(factorial(5));

//★★★★★★★★★★★★★★★★★★
function practice(n){
    return n === 1 ? n : n + practice(n-1)
}

console.log(practice(5));


function practice2(n){
    return n === 1 ? n : n + practice2(n-1)
}

console.log(practice2(5));

// ★★★★★★★★★★★★// ★★★★★★★★★★★★// ★★★★★★★★★★★★
// 좋지 않은 접근법이었다. // 메모이제이션 아니면 이거 웬만하면 쓰지말자..
// function practice3(n, sum){
//     sum = sum || 0

//     return n === 1 ? n : sum + practice(n-1, sum)
// }
// console.log(practice3(5));

function practice3(n){
    return n === 1 ? n : n + practice3(n-1);
}

console.log(practice3(5));


function practice4(n){
    return n === 1 ? n : practice4(n-1) + n
}

console.log('하이',practice4(5));