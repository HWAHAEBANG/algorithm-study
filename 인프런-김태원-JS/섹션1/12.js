// 추가 영상에서 내 방법이 더 낫다고 올라옴

function myAnswer(str){
    let answer = str.toUpperCase();

    return answer
}


console.log(myAnswer('ItisTimeToStudy'));


//==========================================
// 내 방법이 더 낫지 않나..
function solution1(str){
    let answer=''

    for(let x of str){
        if(x===x.toLowerCase()) answer += x.toUpperCase()
        else answer += x
    }


    return answer
}


console.log(solution1('ItisTimeToStudy'));

//==========================================
// 아스키 코드를 사용하는 방법
function solution2(str){
    let answer = ''

    for( let x of str){
        let num = x.charCodeAt();
        if( 97 <= num && num <= 122 ) answer += String.fromCharCode(num-32) //아스키코드를 다시 문자로. 대소문자 차이는 32
        else answer += x
    }

    return answer
}

console.log(solution2('ItisTimeToStudy'));