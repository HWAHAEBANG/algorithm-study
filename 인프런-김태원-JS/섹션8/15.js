function myAnswer(k, arr, m){
    let answer = []
    let tmp = Array.from({length: k}, ()=>0)
    let n = arr.length

    function DFS(L,s){
        if(L === k){
            let sum = tmp.reduce((a, b) => a + b)
            if( sum % m === 0) answer.push(tmp.slice())
        } else {
            for(let i=s; i<n; i++){
                tmp[L] = arr[i]
                DFS(L+1, i+1) // 여기 자꾸 s+1로 한다 정신차려
            }
        }
    }

    DFS(0,0)

    return answer.length
}

console.log(myAnswer(3, [2, 4, 5, 8, 12], 6));

// 내가 한 것도 되긴하지만, 합을 비교하는 문제는 tmp를 사용하지 않고도 만들 수있음.
// 그리고 합을 저하는 것도 for문 돌면서 바로 더해버릴 수 있음.
// 대신 DFS의 세번쨰 인자로 sum값도 계속 전달해주어야함.

function solution(k, arr, m){
    let answer = 0
    let n = arr.length

    function DFS(L, s, sum){
        if(L === k){
            if( sum % m === 0 ) answer++ 
        } else {
            for(let i=s; i<n; i++){
                DFS(L+1, i+1, sum + arr[i])
            }
        }
    }

    DFS(0, 0, 0)

    return answer
}

console.log(solution(3, [2, 4, 5, 8, 12], 6));