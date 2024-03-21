//다답 숫자 풀이
function solution(n){
    let arr = [];

    while(n>0){
        arr.push(n%10);
        n = Math.floor(n/10);
    }

    return arr;
}


// 내답 문자풀이 동일
function solution(n) {
    return n.toString().split('').reverse().map(item => Number(item))
}