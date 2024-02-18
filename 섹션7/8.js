// 음... 왜 계속 0이지

function myAnswer(arr){
    let answer
    let max = 0
    
    for(let i=0; i<arr.length; i++){
        let tmp = arr[i][1]
        let cnt = 0;
        for(let j=0; j<arr.length; j++){
            if(i===j)continue;
            if( tmp <= arr[j][0]){
                tmp = arr[j][1]
                cnt ++
            }
        }
        if(cnt > max) max = cnt
        cnt = 0
    }

    return answer = max
}

console.log(myAnswer([1, 4], [2, 3], [3, 5], [4, 6], [5, 7]));

// 

function solution(arr){
    let answer = 0;

    arr.sort((a,b)=>{
        if(a[1] === b[1]) return a[0]-b[0]
        else return a[1]-b[1]
    })
    let et = 0//end point
    for(let x of arr){
        if(x[0] >= et){
            et = x[1]
            answer++
        }
    }

    return answer
}

console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]));