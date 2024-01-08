function myAnswer(str, k) {
    let answer = 0

    for( i=0 ; i < str.length ; i++){
        if( str[i] === k) answer++
    }

    return answer
}

console.log(myAnswer('COMPUTERPROGRAMMIN','R'));

//========================================
// 맞긴 맞았는데, for of 사용가능한 경우 잘 활용하면 좋을 듯

function solution(str, k){
    let answer = 0;

    for(let x of str) {
        if(x === k) answer++;
    }


    return answer;
}


console.log(solution('COMPUTERPROGRAMMIN','R'));


//==========================================
// split의 특성을 이용해서 해결할 수도 있음.
// 찾는 문자가 가장 마지막이나 처음에 있더라도 성립함. 빈 문자열 요소가 추가되기 때문.

function solution1(str, k){
    let answer = str.split(k).length-1;

    return answer;
}


console.log(solution1('COMPUTERPROGRAMMIN','R'));
