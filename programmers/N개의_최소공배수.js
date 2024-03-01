// 최대공약수 구하기
function GCD(a, b){
    let remain = a % b

    if(remain === 0) return b

    return GCD(b, remain)
}

console.log(GCD(2,4));

function lcm(a,b){
    return a*b/GCD(a,b)
}

console.log(lcm(2,3));


// 두개씩 계속 최소공배수를 더해나가는 방식
function solution(arr){
    let value = arr[0]

    for(let i=1; i<arr.length; i++){
        value = lcm(value, arr[i])
    }

    return value
}

console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));

//=======================================================================================
//찾으려는 최소공배수의 약수는  해당 요소들을 약수로써 가지고 있을 것을 활용
// 난 병신이다.
// function solution(arr){
//     let flag = 1
//     arr.sort((a, b) => a - b)
//     let n = arr.length
//     let last = arr[n-1]

//     while(flag){
//         let cnt = false

//         for(let i=0; i<n-1; i++){
//             if(last % arr[i] !== 0) cnt = true
//         }

//         if(cnt){
//              last *= 2
//         } else {
//             flag = 0
//         }
//     }

//     return last
// }

// console.log(solution([2,6,8,14]));
// console.log(solution([1,2,3]));