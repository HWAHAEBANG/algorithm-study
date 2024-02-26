function solution(board){
    let answer = 0
    let n = board.length
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]
    let dy = [0, 1, 1, 1, 0, -1, -1, -1]
    let queue = []

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if( board[i][j] === 1 ){
                board[i][j] = 0;
                queue.push([i,j])
                answer ++
                while(queue.length){
                    let x = queue.shift()
                    for(let i=0; i<8; i++){
                        let nx = x[0] + dx[i]
                        let ny = x[1] + dy[i]
                        if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny] === 1){
                            board[nx][ny] = 0
                            queue.push([nx,ny])
                        }
                    }
                }
            }
        }
    }

    return answer
}

console.log(solution([[1, 1, 0, 0, 0, 1, 0], 
                     [0, 1, 1, 0, 1, 1, 0],
                      [0, 1, 0, 0, 0, 0, 0],
                     [0, 0, 0, 1, 0, 1, 1],
                     [1, 1, 0, 1, 1, 0, 0],
                     [1, 0, 0, 0, 1, 0, 0],
                     [1, 0, 1, 0, 1, 0, 0]]));