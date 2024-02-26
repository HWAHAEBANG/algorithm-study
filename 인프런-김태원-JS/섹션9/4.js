function myAnswer(arr){
    let answer = 0
    let n = arr.length
    let ch = Array.from({length: arr.length}, () => 0)
    let p = []

    function DFS(L){
        if(L === n){
            answer++
            console.log(p);
        }else{
            for(let i=1; i<n; i++){
                if(ch[i] === 0 && arr[L][i] === 0){
                    ch[i] = 1
                    p.push(i)
                    DFS(L+1)
                    ch[i] = 0
                    p.pop()
                }
            }
        }
    }

    p.push(1)
    DFS(1)

    return answer
}

// console.log(myAnswer(
//     [
//         [0, 0, 0, 0, 0, 0, 0], 
//         [0, 1, 1, 1, 1, 1, 0],
//         [0, 0, 0, 1, 0, 0, 0],
//         [1, 1, 0, 1, 0, 1, 1],
//         [1, 1, 0, 0, 0, 0, 1],
//         [1, 1, 0, 1, 1, 0, 0],
//         [1, 0, 0, 0, 0, 0, 0]
//     ]
// ));


// 접근법 틀림. 그래프 문제의 변형이라고 생각했는데 정말 말 그대로 미로탐색이었음

function solution(board){
    let answer = 0
    // let dx = [1,0,-1,0];
    // let dy = [0,-1,0,1];
    let dx = [-1,0,1,0];
    let dy = [0,-1,0,1];

    function DFS(x,y){
        if(x === 6 && y === 6){
            answer++
        } else {
            for(let i=0; i<4; i++){
                let nx = x + dx[i]
                let ny = y + dy[i]
                if(nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0){
                    board[x][y] = 1
                    DFS(nx,ny)
                    board[x][y] = 0
                }
            }
        }
    }

    board[0][0] = 1
    DFS(0,0)

    return answer
}

console.log(solution(
    [
        [0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]
    ]
));
