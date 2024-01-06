function myAnswer(...list) {
    let answer;

    if(list[0] < list[1]) answer = list[0] // 불필요 로직, 답안 참고
    else answer = list[1]
    
    for( i=1 ; i < list.length ; i++ ){
        if( answer >= list[i+1] ) answer = list[i+1]
    }

    return answer;
}

console.log(myAnswer(5,3,7,11,2,15,17));


//=================================================


// min 을 가장 첫번째 값으로 초기화 해놓고, 반복문을 1부터 도는 방법도 있음
function solution1(...list) {
    let answer,  min = list[0]

    for(let i = 1 ; i < list.length ; i++ ){
        if(min > list[i] ) min = list[i];
    }
    answer = min
    return answer;
}

console.log(solution1(5,3,7,11,2,15,17));


//=================================================

// min 을 가장 큰 값으로 초기화 해놓고, 반복문을 0부터 도는 방법도 있음
function solution2(...list) {
    let answer,  min = Number.MAX_SAFE_INTEGER

    for(let i = 0 ; i < list.length ; i++ ){
        if(min > list[i] ) min = list[i];
    }
    answer = min
    return answer;
}

console.log(solution2(5,3,7,11,2,15,17));