// 정확함! 정답!

function myAnswer(max, arr){
    let answer = Number.MIN_SAFE_INTEGER
    let n = arr.length

    function DFS(L,sum){
        if(sum > max) return
        if(L === n){
            if(sum > answer) answer = sum
        } else {
            DFS(L+1, sum+arr[L])
            DFS(L+1, sum)
        }
    }

    DFS(0, 0)
    return answer
}

console.log(myAnswer(259, [81, 58, 42, 33, 61]));