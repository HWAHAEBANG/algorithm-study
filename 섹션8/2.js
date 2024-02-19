function myAnswer(n){
    let answer = []

    function DFS(L){
        if(L === 0) return
        if(L === 1) return answer.unshift(1)
        answer.unshift(L%2)
        return DFS(parseInt(L/2))
    }

    DFS(n)

    return answer.join('')
}

console.log(myAnswer(11));


// 잘했는데 unshift말고 스택 프레임을 조금 더 활용해 보자

function solution(n){
    let answer = ''

    function DFS(L){
        if(L === 0) return;
        DFS(parseInt(L/2))
        answer += String(L%2)
    }

    DFS(n)    

    return answer
}

console.log(solution(11));