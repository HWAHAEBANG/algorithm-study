// function myAnswer(n, arr){
//     let answer = 0
//     let graph = Array.from(Array(n), ()=>Array(n).fill(0))

//     for(let x of arr){
//         graph[x[0]-1][x[1]-1] = 1
//     }

//     function DFS(L){
//         if(L===n){

//         } else {
//             for(let i=0; i<n ;i++){
//                 // graph[L][i]
//                 DFS(L-1)
//             }
//         }
//     }

//     DFS(0)

//     return answer
// }

// console.log(myAnswer(5,[
//     [1,2],
//     [1,3],
//     [1,4],
//     [2,1],
//     [2,3],
//     [2,5],
//     [3,4],
//     [4,2],
//     [4,5]
// ]));


// 접근법 맞았음. 세부적인 디테일에서 조금 차이 났을 뿐
// 이것도 ch 필요하다. 왔던 길 되돌아가지 않도록.

function solution(n, arr){
    let answer = 0
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0))
    let ch = Array.from({length:n+1}, ()=> 0)
    let path = []

    for(let [a,b] of arr){
        graph[a][b] = 1 // 인덱스 0부터해도됨. 비워둘거임.
    }

    function DFS(v){
        if(v===n){
            answer++
            console.log(path);
        } else {
            for(let i=1; i<=n; i++){
                if(graph[v][i] === 1 && ch[i] === 0){
                    ch[i] = 1
                    path.push(i)
                    DFS(i)
                    ch[i] = 0
                    path.pop()
                }
            }
        }
    }

    ch[1] = 1
    path.push(1)
    DFS(1)

    return answer
}

console.log(solution(5,[
    [1,2],
    [1,3],
    [1,4],
    [2,1],
    [2,3],
    [2,5],
    [3,4],
    [4,2],
    [4,5]
]));