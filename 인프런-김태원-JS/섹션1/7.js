function myAnswer(a, ...list){
    let answer, arr = []


    for( let x of list ){
        if( x % 10 === a ) arr.push(x)
    }

    answer = arr.length

    return answer
}

console.log(myAnswer(3, 25, 23, 11, 47, 53, 17, 33));
console.log(myAnswer(0, 12, 20, 54, 30, 87, 91, 30));

// ========================================
// 카운트만 하면 되는 것이기 때문에 배열의 만드는 것은 무의미했음 메모리 낭비
// 단순히 증가 연산자만 실행시켜줘도 충분
function solution(day, arr){
    let answer  = 0
    for( let x of arr ) {
        if( x % 10 === day) answer++
    } 

    return answer
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));