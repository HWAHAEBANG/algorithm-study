// 맞음

function myAnswer(n){
    let answer = 0
    let dy = Array.from({length:n+1}, ()=>0)
    dy[1] = 2
    dy[2] = 3
    for(let i=3; i<=n ;i++){
        dy[i] = dy[i-2] + dy[i-1]
    }

    answer = dy[n]
    return answer
}

console.log(myAnswer(7));

function solution(n){  
    let answer=0;
    let dy=Array.from({length:n+2}, ()=>0);
    dy[1]=1;
    dy[2]=2;
    for(let i=3; i<=n+1; i++){
        dy[i]=dy[i-2]+dy[i-1];
    }
    answer=dy[n+1];
    return answer;
}

console.log(solution(7));