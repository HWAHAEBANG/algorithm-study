function myAnswer(str){
    let answer = [];

    let cnt=1
    answer.push(str[0])

    for(let i = 1 ; i<str.length; i++){
        if(str[i] === str[i-1]) cnt++
        else {
            if(cnt !== 1)answer.push(cnt)
            answer.push(str[i])
            cnt=1
        }
    }

    return answer.join('')
}

console.log(myAnswer('KKHSSSSSSSE'));

// ============================
function solution(str){
    let answer = ''

    let cnt=1
    answer += str[0]

    for(let i = 1 ; i<str.length; i++){
        if(str[i] === str[i-1]) cnt++
        else {
            if(cnt !== 1)answer += String(cnt);
            answer += str[i]
            cnt=1
        }
    }

    return answer
}

console.log(solution('KKHSSSSSSSE'));