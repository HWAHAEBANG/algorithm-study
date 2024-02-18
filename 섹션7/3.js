function myAnswer (arr){
    let plus = []
    let minus = []

    for(let x of arr){
        if(x > 0) plus.push(x)
        else minus.push(x)
    }

    return [...minus, ...plus]
}

console.log(myAnswer([1,2,3,-3,-2,5,6,-6]));


// 버블정렬 방식을 활용해서 하는 거였음.
// 버블정렬로 하라고 안 나와 있었는데....
// 여튼 순서를 유지한채 마이너스 이면 자리만 바꿔주면 됨

function solution(arr){
    let answer = arr
    for(let i=0; i<arr.length; i++){
        for(let j=0 ;j<arr.length-i-1; j++){
            if(arr[j] > 0 && arr[j+1] < 0){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
            }
        }
    }

    return answer 
}

console.log(solution([1,2,3,-3,-2,5,6,-6]));