// 흠... 미완
function myAnswer(str){
    let answer = {A: 0, B: 0, C: 0, D: 0, E: 0, } 

    for(let i=0; i<str.length; i++){
      answer[str[i]]++
    }

    let max = Math.max(...Object.values(answer))

    return max
}

console.log(myAnswer('BACBACCACCBDEDE'));

//=========================================
// 해시맵을 이용하는 문제로, 충분히 체득하였음.

function solution(str){
    let answer
    let sH = new Map();

    for(let x of str){
        if(sH.has(x)) sH.set(x,sH.get(x) + 1)
        else sH.set(x,1)
    }

    let max = Number.MIN_SAFE_INTEGER

    for(let [key, val] of sH){
        if(val > max){
            max = val;
            answer = key;
        }
    }

    return answer
}

console.log(solution('BACBACCACCBDEDE'));