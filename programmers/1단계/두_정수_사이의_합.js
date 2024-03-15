//내답다답비슷
function solution(a, b) {
   if(a === b) return a

    let answer = 0    
 
  if(a > b) [a,b] = [b,a]
    for(let i=a; i<=b; i++){
        answer += i
    }
    
    return answer
}

console.log(solution(3,5));
console.log(solution(3,3));
console.log(solution(5,3));


// 참신답
function adder(a, b){
    return (a+b) * (Math.abs(a-b)+1) / 2;
}
// 두 숫자 a와 b 사이의 모든 숫자의 개수는 (Math.abs(a−b)+1)입니다.
// 두 숫자 a와 b를 포함한 등차수열의 합은 (a+b)×(Math.abs(a−b)+1)입니다.
// 이 값을 전체 숫자의 개수로 나누면 두 숫자 사이의 모든 숫자의 합이 나옵니다.