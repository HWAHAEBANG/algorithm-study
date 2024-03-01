// 미결

function solution(n, computers) {
    let answer=0;
    let path=[]

    function DFS(v){
        if(v === n){
            answer++
            console.log(path);
        }else{
            for(let i=0; i<n; i++)
            if(computers[v][i] === 1){
                // path.push(i)
                DFS(i)
                // path.pop()
            }
        }
    }

    DFS(1)

    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
// console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));


    // for(let i=0;i<n;i++){
    //     for(let j=i+1;j<n;j++){
    //         if(computers[i][j] === 0) answer++
    //         if(computers[i][j] === 1) console.log(i,j);
    //     }
    // }