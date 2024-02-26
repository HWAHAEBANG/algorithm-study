function solution(m, arr){
    let answer = Number.MIN_SAFE_INTEGER
    let ps = []
    let pt = []
    let n = arr.length

    for(let x of arr){
        ps.push(x[0])
        pt.push(x[1])
    }

    function DFS(L, sum, time){
        if(time > m) return;
        if(L === n){
            if(sum > answer) answer = sum
        } else {
            DFS(L+1, sum+ps[L],  time+pt[L])
            DFS(L+1, sum, time)
        }
    }

    DFS(0,0,0)

    return answer
}

console.log(solution(20, [[10,5],[25,12],[15,8],[6,3],[7,4]]));