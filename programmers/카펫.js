// 여기에선 되는테 테스트 케이스 123 실패 왤까...

function solution(brown, yellow){
    let divisors = []
    
    for(let i=0; i<yellow+1; i++){
        if(yellow % i === 0) divisors.push(i)
    }

    let half = parseInt(divisors.length/2)

    if(divisors[0] === divisors[divisors.length-1]) return [3,3]
    for(let i=0; i<half; i++){
        if(divisors[divisors.length-1-i]*2 + (divisors[i]+2)*2 === brown) return([divisors[divisors.length-1-i]+2, divisors[i]+2]);
    }
    return divisors
}

console.log(solution(10,2));
console.log(solution(8,1));
console.log(solution(24,24));

console.log(solution(14,4));
console.log(solution(18,6));
console.log(solution(20,12));
console.log(solution(22,8));
console.log(solution(24,9));
console.log(solution(24,16));
console.log(solution(26,10));
