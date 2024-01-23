// 아 응용 쉽지않네..

function sum(arr){
    return arr.reduce((acc,cur) => acc+cur)
}

function myAnswer(m, arr){
    let answer = 0
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr.slice(j,j+i+1).length <= i) continue;
            else if(sum(arr.slice(j,j+i+1)) <= m) answer++
            else continue;
        }
    }

    return answer
}

console.log(myAnswer(5, [1, 3, 1, 2, 3]));

// =========================
function solution (m, arr){
    let answer = 0
    let lt = 0
    let sum = 0

    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        while(sum > m) sum -= arr[lt++];
        answer += (rt-lt+1)
    }

    return answer
}

console.log(solution(5, [1, 3, 1, 2, 3]));