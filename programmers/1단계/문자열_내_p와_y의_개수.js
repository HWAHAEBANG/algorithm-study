// 내답다답 동일
function solution(s){
    let result = 0
    
    for(let x of s.toLowerCase()){
        if(x === 'p') result++
        else if (x === 'y') result--
    }
    
    return result ? false : true
}