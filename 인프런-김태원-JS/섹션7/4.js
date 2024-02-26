function myAnswer(arr){
    let answer = arr

    for(let i=0 ; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            else continue;
        }
    }

    return answer
}

console.log(myAnswer([11, 7, 5, 6, 10, 9]));

// 버블 정렬을 만들어 놨네 뭐함?

function solution(arr){
    let answer = arr

    for(let i=0; i<arr.length; i++){
        let tmp = arr[i], j
        for(j=i-1; j>=0; j--){
            if(tmp < arr[j]) arr[j+1] = arr[j]
            else break;
        }
        arr[j+1] = tmp
    }

    return answer
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([11, 7, 5, 6, 10, 9]));