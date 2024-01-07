function myAnswer(str){
    let answer = []

    for( let x of str){
        if( x === 'A') answer.push('#')
        else answer.push(x)
    }

    return answer.join('')
}

console.log(myAnswer('BANANA'));

// ===============================================
// 나는 배열로 받아서 변경한 뒤에 조인해야만 되는 줄 알았는데, string 타입 + 연산으로 가능

function solution1(str){
    let answer = ''

    for(let x of str) {
        if( x === 'A') answer += '#'
        else answer += x
    }

    return answer
}

console.log(solution1('BANANA'));


// ===============================================
// string의 replace를 통해서도 가능.

function solution2(str){
    let answer = str

    // 원본이 바뀌지 않기때문에, 명시적으로 재할당을 해줘야 함.
    // 정규식에 /a 를 붙이지 않으면 맨 처음 만나는 A만 교체됨.
    answer = answer.replace(/A/g,'#')

    return answer
}


console.log(solution2('BANANA'));