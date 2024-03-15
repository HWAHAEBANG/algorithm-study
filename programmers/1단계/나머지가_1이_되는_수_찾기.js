// 다른 사람 답
function solution(n){
    let answer = 1;
    // while문의 조건에 증감연산자를 사용한 것이 인상적
    while(answer++){
        if(n % answer === 1) return answer;
    }
}


// 내 답
function solution(n) {
    let answer = 0;

    while(1){
        answer++
        if(n % answer === 1) return answer;
    }
}