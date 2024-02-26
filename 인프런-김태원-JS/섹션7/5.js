function myAnswer(n, arr){
    let answer
    let queue = []

    for(let x of arr){
        if(queue.includes(x)){
            let idx = queue.findIndex((k)=>(k === x))
            queue.splice(idx,1)
            queue.unshift(x)
        } else {
            if(queue.length < n) queue.unshift(x)
            else {
                queue.pop()
                queue.unshift(x)
            }
        }
        console.log(queue);
    }

    return answer = queue
}

// console.log(myAnswer(5, [1,2,3,2,6,2,3,5,7]));

// 메서드를 사용해서 하는 방향성은 아주 맞있음.
// 하지만 좀 더 로우레벨로 짜보자.

function solution(size, arr){
    let answer = Array.from({length:size}, () => 0);
    for(let x of arr){
        let pos = -1
        for(let i = 0; i<size; i++) if(answer[i] === x) pos = i;
        if(pos === -1){
            for(let i=size-1; i >= 1; i--){
                answer[i] = answer[i-1]
            }
        }
        else {
            for(let i=pos; i>=1; i--){
                answer[i] = answer[i-1]
            }
        }
        answer[0] = x
    }

    return answer
}

console.log(solution(5, [1,2,3,2,6,2,3,5,7]));