function myAnswer(str){
    let answer = parseInt(str.replace(/[^0-9]/g, ''));
    return answer
}

console.log(myAnswer('g0en2T0s8eSoft'));


// ===============================
// 메서드 사용하지 말라고 하면? 근데 isNAN도 메서드 아님?

function solution(str){
    let answer = ''

    for(let x of str){
        if(!isNaN(x)) answer += x // 또는 answer = answer*10 + Number(x);
    }

    return answer
}


console.log(myAnswer('g0en2T0s8eSoft'));