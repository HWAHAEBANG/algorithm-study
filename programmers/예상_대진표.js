function solution(n, a, b){
    let answer = 0

    while(a !== b){
        if( a % 2 !== 0) a += 1 
        if( b % 2 !== 0) b += 1

        a = a/2
        b = b/2

        answer++
    }

    return answer
}

console.log(solution(8,3,7));