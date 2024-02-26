function myAnswer(arr, m){
    let answer
    let max = Number.MIN_SAFE_INTEGER

    function DFS(L, sum){
        if(sum + arr[L] > m){
            max = Math.max(max, sum)
        } else {
            DFS(L+1, sum+arr[L])
            DFS(L+1, sum)
        }
    }

    DFS(0,0)

    return answer =  max
}

// console.log(myAnswer([1, 2, 5], 15));

// 거의 다왔는데
// 근데 여전히 중복 순열은 좀 헷갈리네

function solution(arr, m){
    let answer = Number.MAX_SAFE_INTEGER
    let n = arr.length

    function DFS(L, sum){
        if(sum > m) return;
        if(sum === m){
            answer = Math.min(answer, L) // 흠....
        } else {
            for(let i=0; i<n; i++ ){
                DFS(L+1, sum+arr[i])
            }
        }
    }

    DFS(0,0)

    return answer
}

console.log(solution([1, 2, 5], 15));
