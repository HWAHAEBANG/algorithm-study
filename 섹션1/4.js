function myAnswer(n) {
    let answer = 0;

    for(let i = n;  i > 0 ; i--){
        answer += i
    }

    return answer;
}

console.log(myAnswer(6));
console.log(myAnswer(10));


//=================================================


function solution(n) {
    let answer = 0

    for(i=0;i<=n; i++){
        answer += i
    }

    return answer;
}

console.log(solution(6));
console.log(solution(10));