// 12의 배수 중에 n보다 최소의 차이로 큰 수
// n을 12로 나누웠을 때 나머지가 0이면 그만, 1~11면 1다스 더 추가

function myAnswer(n) {
    if ( n > 1000 ) return 'over 1000 ';
    let answer;    
    const dose = 12;
    
    if( n % dose === 0 ) answer = n/dose
    else answer = Math.floor(n/dose) + 1

    return answer;
}

console.log(myAnswer(25));
console.log(myAnswer(178));

//=================================================

function solution(n) {
    let answer = Math.ceil(n/12);

    return answer;
}

console.log(solution(25));
console.log(solution(178));