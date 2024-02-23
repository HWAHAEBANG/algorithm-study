// 맞긴함. 답 잘 나옴

function myAnswer(n){
    let answer = 1

    function DFS(v){
        if(v === n+1){
            return;
        } else {
            answer *= v
            DFS(v+1)
        }
    }

    DFS(1)

    return answer
}

console.log(myAnswer(5));

// 내 코드가 더 간단한 것 같은데..

function solution(n){
    let answer

    function DFS(n){
        if(n === 1) return 1
        else return n*DFS(n-1)
    }

    return answer = DFS(n)
}

console.log(solution(5));