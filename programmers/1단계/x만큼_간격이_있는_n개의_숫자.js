// 디딥 - 쉬운로직인데 나는 생각이 안 남
function solution(x, n){
    let answer = [];

    for(let i=1; i<=n; i++){
        answer.push(x*i)
    }

    return answer
}


// 내답
function solution(x, n) {
    let answer = [x];
    let num = x
    
    while(answer.length !== n){
        num += x
        answer.push(num)
    }
    
    return answer;
}