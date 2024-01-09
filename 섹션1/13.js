// 이 방법도 맞지만, if를 두개 쓰는게 아니라 else 쓰는게 더 나을 수도? 가독성은 내거가 더 좋은듯

function myAnswer(str){
    let answer = ''

    for(let x of str){
    let askCode = x.charCodeAt()
        if(65 < askCode && askCode < 90) answer += x.toLowerCase()
        if(97 < askCode && askCode < 122) answer += x.toUpperCase()
    }

    return answer
}

console.log(myAnswer('StuDY'));

//=====================================================================

function solution(str){
    let answer = ''
    
    for(let x of str){
            if(x === x.toLowerCase()) answer += x.toUpperCase()
            else answer += x.toLowerCase()
    }

    return answer
}

console.log(solution('StuDY'));