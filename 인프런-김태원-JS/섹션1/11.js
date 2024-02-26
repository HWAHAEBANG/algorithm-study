function myAnswer(str){
    let answer = 0
    
    for(let i = 0 ; i < str.length ; i++){
        if(/[A-Z]/.test(str[i])) answer++
    }

    return answer
}

console.log(myAnswer('KoreaTimeGood'));


//================================
// toUppeCase를 사용하는 방법 (+ for of)

function solution1(str){
    let answer = 0

    for( let x of str ){
        // toUpperCase는 원본을 변견하지 않음
        if(x === x.toUpperCase()) answer++
    }
    return answer
}

console.log(solution1('KoreaTimeGood'));

//=================================
// 아스키 코드를 사용하는 방법
// 대문자 : 65 90  
// 소문자 : 97 122


function solution2(str){
    let answer = 0

    for( let x of str){
        // if( 65 <= x.charCodeAt() <= 90) answer++ // 이거 안되네
        const num = x.charCodeAt()
        if( num >= 65 && num <= 90) answer++
    }


    return answer
}


console.log(solution2('KoreaTimeGood'));