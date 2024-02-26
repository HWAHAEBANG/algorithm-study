//땡

function myAnswer (n, m){
    let answer
    let arr = []

    function DFS(L){
        if(L > n){
            return;
        } else {
            console.log(L);
            DFS(L*2);
            DFS(L*2+1);
        }
    }

    DFS(n)

    return answer
}

console.log(myAnswer(3,2));

// 음 잘 와닿지가 않네!!

function solution(n,m){
    let answer = [];
    let tmp = Array.from({length: m}, ()=>0)

    function DFS(L){
        if(L === m){
            answer.push(tmp.slice())
        } else {
            for(let i=1; i<=n; i++){ // 이부분
                tmp[L] = i; // 잘 
                DFS(L+1); // 이해가 안됨.
            }
        }
    }

    DFS(0)
    return answer
}


console.log(solution(3,2));