function myAnswer(arr){
    let answer = 0
    let acc = 1

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === 1){
            answer += acc;
            acc++;
        } else {
            acc = 1;
        }
    }

    return answer
}

console.log(myAnswer([1,0,1,1,1,0,0,1,1,0]));

//=========================================
// 접근 방법 완전히 맞음
// 하지만 for of와 acc 초기값 차이가 있음. 다양한 관점 차원에서 아래에 연습


function solution(arr){
    let answer = 0, cnt = 0;
    for(let x of arr){
        if( x === 1) {
            cnt++;
            answer += cnt;
        } else {
            cnt = 0;
        }
    }

    return answer
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]));