// 신박한답
function solution(arr){
   return arr.filter((val,idx) => val !== arr[idx-1])
}


// 내답다답
function solution(arr){
    var answer = [arr[0]];
    
    for(let i=1; i<arr.length; i++){
        if(answer.at(-1) !== arr[i]) answer.push(arr[i])    
    }

    return answer;
}