// 입력받은 값을 큰 순서로 정렬한다.
// 삼중포문?

// 접근 법 완전히 맞았음.
// 하지만 마지막 번째를 인덱스로 계산할 때 반대로 계산했음.
// 그리고 3중 포문 돌 때 j와 k의 초기 값을 0이 아닌 각각 j=i+1 k=+j+1 해야 했음.

// 틀린 답
function myAnswer(k, arr){
    let answer
    let sumArr = []

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(j === i) continue;
            for(let k=0; k<arr.length; k++){
                if(k === i && k === j) continue;
                sumArr.push(arr[i]+arr[j]+arr[k])
            }
        }
    }

    const set = new Set(sumArr)
    const uniqueArr = [...set].sort((a,b) => b - a);


    if(uniqueArr[k]) answer = uniqueArr[k-1]
    else answer = -1
    

    return answer
}


console.log(myAnswer(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

//=========================================
// 수정 답

function myAnswer1(k, arr){
    let answer
    let sumArr = []

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length; k++){
                sumArr.push(arr[i]+arr[j]+arr[k])
            }
        }
    }

    const set = new Set(sumArr)
    const uniqueArr = [...set].sort((a,b) => b - a);


    if(uniqueArr[k]) answer = uniqueArr[k-1]
    else answer = -1
    

    return answer
}

console.log(myAnswer1(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

//=========================================


function solution(k, arr){
    let answer
    
    let tmp = new Set(arr);
    
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length; k++){
                tmp.add(arr[i]+arr[j]+arr[k]);
            }
        }
    }

    let a = Array.from(tmp).sort((a,b) => b - a);
    answer = a[k-1];

    return answer
}


console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));