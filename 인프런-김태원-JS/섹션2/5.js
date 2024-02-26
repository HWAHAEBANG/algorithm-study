// 정렬을 한 다음에 원래 배열에서 인덱스를 찾아야할까.

// 핵심! sort 메서드는 원본을 변경시킨다.
// 복사를 하려고해도, 참조에 의한 전달이 되므로 불변성을 유지해야한다.

function myAnswer(arr){
    let answer = []
    let sortedArr = [...arr]
    sortedArr.sort((a, b)=> b-a)

    for(let i = 0 ; i<arr.length ;i++){
        answer.push(sortedArr.indexOf(arr[i])+1);
    }


    return answer;
}

console.log(myAnswer([87, 89, 92, 100, 76]));
console.log(myAnswer([92, 92, 92, 100, 76 ]));


// ==================================================
// sort 사용하지 않고 푸는 법

function solution(arr){
    let n = arr.length
    let answer = Array.from({length:n}, () => 1)

    for( let i=0; i<n; i++ ){
        for( let j=0; j<n; j++ ){
            if(arr[i]<arr[j]) answer[i]++;  // 배열에 이렇게도 할 수 있구나
        }        
    }

    return answer
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([92, 92, 92, 100, 76 ]));