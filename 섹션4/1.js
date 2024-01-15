function myAnswer(arr){
    let answer = [...arr]

    for(let i = 0; i<answer.length; i++){
        answer[i] = answer[i].toString().split('')
        for(let j = 0; j<answer[i].length; j++){
            answer[i][j] = parseInt(answer[i][j])
        }
        answer[i] = answer[i].reduce((arr, cur)=>arr + cur,0 )
    }

    let max = Math.max(...answer)


    let temp = []

     for(let i = 0; i<answer.length; i++){
        if( answer[i] === max) temp.push(arr[i])
     }

    return Math.max(...temp)
}

console.log(myAnswer([128, 460, 603, 40, 521, 137, 123]));

//======================================

function solution(arr){
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of arr){
        let sum = 0, tmp = x
        while(tmp){
            sum += tmp % 10;
            tmp = Math.floor(tmp/10);
        }
        if(max < sum){
            max = sum
            answer = x;
        }
        else if(max === sum){
            if(x > answer) answer=x;
        }
    }

    return answer
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

//======================================

function solution1(arr){
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of arr){
        let sum = x.toString().split('').reduce((a, b) => a+Number(b), 0)
        if(max < sum){
            max = sum
            answer = x;
        }
        else if(max === sum){
            if(x > answer) answer=x;
        }
    }

    return answer
}

console.log(solution1([128, 460, 603, 40, 521, 137, 123]));