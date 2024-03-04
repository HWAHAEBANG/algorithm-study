
// 메모리 초과가 일어나지 않게 배열 자체를 안 만들고 쓰는법 이것도 DP라고함.

function solution(n){
let first = 0, second=1, target=0

    for(let i=2; i<=n; i++){ // 작거나 같다여야함 주의
       target = (first + second) % 1234567 //애초에 나머지를 저장 // 배열이 많아지는게 문제가 아니라 숫자 자체가 큰게 문제인가봄
       
       first = second
       second = target
    }

return target
}

console.log(solution(3));
console.log(solution(5));
console.log(solution(100000));

// 메모리 초과 // 테케 절반만 통과
// function solution(n){
// let arr = Array.from({length: n}, ()=>0)

// arr[0] = 0
// arr[1] = 1

//     for(let i=0; i<n; i++){
//        arr[i+2] = arr[i] + arr[i+1] 
//     }

// return arr[n]%1234567
// }

// console.log(solution(3));
// console.log(solution(5));
// console.log(solution(100000));