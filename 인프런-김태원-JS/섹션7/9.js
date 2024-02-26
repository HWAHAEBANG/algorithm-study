function myAnswer(arr){
    let answer = 0

    arr.sort((a, b) => a[0]- b[0])

    let min = arr[0][0]
    let max = arr[arr.length-1][1]

    for(let i = min; i <= max; i++){
        let cnt = 0
        for(let x of arr){
            // console.log( x[0],i, x[1]);
            if(x[0] <= i && x[1] > i) cnt++
        } 
        if(answer < cnt){
            answer = cnt
            cnt = 0
        }
    }

    return answer
}

console.log(myAnswer([[14,18],[12,15],[15,20],[20,30],[5,14]]));

// 답이 나오긴 나옴.
// 하지만 솔루션은 조금더 2중 정렬의 원리를 활용해서 풀었음

function solution(arr){
    let answer = Number.MIN_SAFE_INTEGER
    let T_line = [] // time line

    for(let x of arr){
        T_line.push([x[0], 's'])
        T_line.push([x[1], 'e'])
    }
    
    T_line.sort((a, b) =>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt()
        return a[0]-b[0]
    })
    
    let cnt = 0
    for(let x of T_line){
        if(x[1] === 's') cnt++ 
        else cnt--
        answer = Math.max(answer, cnt)
    }

    return answer
}

console.log(solution([[14,18],[12,15],[15,20],[20,30],[5,14]]));