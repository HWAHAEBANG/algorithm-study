function myAnswer(n, m){
    let answer = []
    let arr =  Array.from({length: n}, () => 0)
        arr = arr.map((_,index)=>index+1)
    let ch = Array.from({length: n}, () => 0)
    let tmp = Array.from({length: m}, () => 0)

    function DFS(L){
        if(L === m){
            let asc = 1
            for(let i=0; i<n-1; i++){
                if(tmp[i] > tmp[i+1]) asc = 0
            } 
            if(asc){
                answer.push(tmp.slice())
            }
        }else{
            for(let i=0; i<n; i++){
              if(ch[i] === 0){
                ch[i] = 1
                tmp[L] = arr[i]
                DFS(L+1)
                ch[i] = 0
              }
            }
        }
    }

    DFS(0)

    return answer
}

console.log(myAnswer(4, 2));

// 나는 순열 구하기처럼 풀고 좀 변형하는 방식을 택했는데
// 다른 방식으로 하시네 어느정도 맞는데 조금 다름

function solution(n, m){
    let answer = []
    let tmp = Array.from({length: m}, ()=>0)

    function DFS(L, s){
        if(L === m){
            answer.push(tmp.slice())
        }else{
            for(let i=s; i<=n; i++){
                tmp[L] = i
                DFS(L+1, i+1)
            }
        }
    }

    DFS(0,1)

    return answer
}

console.log(solution(4,2));