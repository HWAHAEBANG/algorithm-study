function myAnswer(n){
    let answer
    let queue = []

    function BFS(v){
        if(1){

        } else {
            queue.push(v)
            // BFS(v*2)
            // BFS(v*2+1)
        }
    }

    BFS(n)

    return answer
}

console.log(myAnswer(7));


function solution(){
    let answer = ""
    let queue = []
    queue.push(1)

    while(queue.length){
        let v = queue.shift();
        answer += v + " ";
        for(let nv of [v*2, v*2+1]){
            if(nv>7) continue;
            queue.push(nv)
        }
    }

    return answer
}

console.log(solution());