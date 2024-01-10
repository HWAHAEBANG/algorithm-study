function myAnswer(arr){
    let answer = []

    for(let x of arr){
        if(!answer.includes(x)) answer.push(x)
    }

    return answer
}

console.log(myAnswer(['good','time','good','time','student']));

//===========================================

function solution(arr){
    let answer;

   answer = arr.filter((item, index)=> arr.indexOf(item) === index)

    return answer
}

console.log(solution(['good','time','good','time','student']));

