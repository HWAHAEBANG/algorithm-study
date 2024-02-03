// 결과는 잘 나왔고, 접근법도 맞았지만 확실히 처음 풀어본 티가 남
// 없어도 될 변수들이 사용되기도 했고, 디테일한 곳에서 차이가 있음

function myAnswer(arr){
    let answer
    let min = Number.MAX_SAFE_INTEGER
    let minIdx
    let cnt = 0
    let tmp

    for(let i=0; i<arr.length; i++){
        for(let j=cnt; j<arr.length; j++){
            if(arr[j] < min){
                min = arr[j]
                minIdx = j
            }
        }
        
        tmp = arr[cnt]
        arr[cnt] = arr[minIdx]
        arr[minIdx] = tmp

        cnt++
        min = Number.MAX_SAFE_INTEGER
    }    

    return answer = arr
}

console.log(myAnswer([13, 5, 11, 7, 23, 15]));

//===============================================

function solution(arr){
let answer = arr // 얕은복사라 딱히 의미는 없음. 그냥 answer를 리턴하기 용이하게 미리 복사해둔 것.

for(let i=0; i<arr.length-1; i++){ // length-1 이라는 것에 주목, 끝까지 다 돌아도 되지만 마지막 하나 남을 때는 정렬을 해줄 필요가 없기때문.
    let idx = i; // 인덱스 초기화를 i로 하는 것에 주목, 나는 최소값을 찾는다고 MAX_SAFE_INTEAGER를 사용했는데 굳이 그러지 않아도 됐음. // 그리고 여기에 두면 매번 명시적으로 초기화할 필요 없음
    for(let j=i; j<arr.length; j++){ // j의 초기값이 i라는 것에 주목, 나는 cnt라는 변수를 두어서 ++ 해주며 사용했는데, 굳이 그럴 필요없이 상위 포문의 i값을 이용하면 간편히 구현가능// 여긴 또 length-1 아님
        if(arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]]=[arr[idx], arr[i]] // 쟈스에서만? 거눙헌 최신 문법 간편하게 교처 가능
}

return answer
}

console.log(solution([13, 5, 11, 7, 23, 15]));
