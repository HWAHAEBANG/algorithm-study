// 강의에서 거론된 방법은 아니지만 나름 규칙 찾아서 잘 품듯?
// 두 수의 차가 1인경우는 큰 숫자를 가진 사람이 이긴 것이고
// 두 수의 차가 2인 경우는 작은 숫자를 가진 사람이 이긴 것이라는 규칙 발견.

function myAnswer(num, arr1, arr2){
    let answer = []

    for(let i=0; i < num ; i++){
        if(Math.abs((arr1[i] - arr2[i])) === 2) answer.push(arr1[i] - arr2[i] > 0 ? 'B' : 'A')
        else if(Math.abs((arr1[i] - arr2[i])) === 1) answer.push(arr1[i] - arr2[i] > 0 ? 'A' : 'B')
        else if(Math.abs((arr1[i] - arr2[i])) === 0 ) answer.push('D')


    }

    return answer
}


console.log(myAnswer(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

//=================================================
// 배열 말고 문자열을 사용했다는 점과 분기분이 다름
function solution(arr1, arr2){
    let answer = ""

    for(let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] === arr2[i]) answer += 'D '
        else if (arr1[i] === 1 && arr2[i] === 3) answer += 'A '
        else if (arr1[i] === 2 && arr2[i] === 1) answer += 'A '
        else if (arr1[i] === 3 && arr2[i] === 2) answer += 'A '
        else answer += 'B '
    }

    return answer
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));