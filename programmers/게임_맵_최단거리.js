function solution(maps) {
    let answer = 0
    let fx = maps[0].length
    let fy = maps.length
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    let queue = []
    let flag = 0
    let arr = Array.from(Array(fy), ()=>Array.from({length:fx},()=>0))

    queue.push([0,0])
    maps[0][0] = 0
    arr[0][0] = 1

    while(queue.length){
        let [a,b] = queue.shift()
        for(let i=0; i<4; i++){
            let nx = a + dx[i]
            let ny = b + dy[i]
                
            if(nx>=0 && nx<fx && ny>=0 && ny<fy && maps[ny][nx] === 1){
                maps[ny][nx] = 0
                queue.push([nx, ny])
                arr[ny][nx] = arr[b][a]+1
                if(nx === fx-1 && ny === fy-1) flag = 1
                answer = arr[fy-1][fx-1]
            }
        }
    }

    console.log(arr);

    return flag ? answer : -1
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))



// DBS로 플려다 실패한 것. 결과는 나오는데 효율성 떨어지는 듯
function attempt(maps) {
    let answer
    let fx = maps[0].length
    let fy = maps.length
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    let min = Number.MAX_SAFE_INTEGER
    let flag = 0
    
    function DFS(x,y,cnt){
        if(x === fx-1 && y === fy-1){
            if(cnt < min) {
                min = cnt
                flag = 1
            }
        } else {
            for(let i=0; i<4; i++){
                let nx = x + dx[i] 
                let ny = y + dy[i]
                if( nx>=0 && nx < fx && ny>=0 && ny < fy && maps[nx][ny] === 1){
                    cnt++
                    maps[nx][ny] = 0
                    DFS(nx, ny, cnt)
                    maps[nx][ny] = 1
                    cnt--
                }
            }
        }
    }
    
    DFS(0,0,1)
    
    return answer = flag ? min : -1;
}

// console.log(attempt([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
// console.log(attempt([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))
