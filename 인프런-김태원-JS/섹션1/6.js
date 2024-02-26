function myAnswer(...rest) {
    let sum = 0
    let min = Number.MAX_SAFE_INTEGER

    for(let i = 0 ; i < rest.length ; i++ ){
        if( rest[i]%2 === 1 ){
            sum += rest[i]
            if(rest[i] < min) min = rest[i]
        }
    }
    
    return [sum, min]
}


console.log(myAnswer(12, 77, 38, 41, 53, 92, 85));

// ========================================
// 방법은 동일하다, for문 대신 for of 를 썼다는 점. 애초에 answer를 배열로 만들어 놓고 각각 push 한 점이 다름.

function solution(...arr){
    let answer = [], min = Number.MAX_SAFE_INTEGER, sum = 0

    for( let x of arr){
        if( x % 2 === 1 ){
            sum += x
            if( min > x ) min = x
        } 
    }
    answer.push(sum)
    answer.push(min)

    return answer
}


console.log(solution(12, 77, 38, 41, 53, 92, 85));