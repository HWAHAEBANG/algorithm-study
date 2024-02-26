function myAnswer(n, f){
    let answer, flag = 0
    let dy = Array.from(Array(11), ()=>Array(11).fill(0))
    let ch = Array.from({length:n+1}, ()=>0) // +1 빼먹지마.....
    let p = Array.from({length:n}, ()=>0)
    let b = Array.from({length:n}, ()=>0)

    function combi(n,r){
        if(dy[n][r] > 0) return dy[n][r]
        if(r === 0 || r === n) return 1
        else return dy[n][r] = combi(n-1, r-1) + combi(n-1, r)
    }
    function DFS(L, sum){
        if(flag) return;
        if(L === n && sum === f){
            answer=p.slice();
            flag = 1
        }else{
            for(let i=1; i<=n ; i++){
                if(ch[i] === 0){
                    ch[i] = 1
                    p[L] = i
                    DFS(L+1, sum + (p[L]*b[L])) //  L대신 i 쓰지 않게 조심
                    ch[i] = 0
                }
            }
        }
    }

    for(let i=0; i<n; i++){
        b[i] = combi(n-1, i)
    }
    DFS(0,0)

    return answer
}

console.log(myAnswer(4,16));