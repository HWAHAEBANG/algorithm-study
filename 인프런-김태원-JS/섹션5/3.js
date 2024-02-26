// function myAnswer(m, arr){
//     let answer = 0
    
//     for(let i=0; i<arr.length; i++){
//         let sum = 0
//         for(let j=i+1; j<arr.length; j++){
//             if(sum < m) {
//                 sum += arr[j]
//             } else if (sum === m ) answer++
//             else break;
//         }
//     }
//     return answer
// }

// console.log(myAnswer(6, [1, 2, 1, 3, 1, 1, 1, 2]));

//------------

// function sum(arr){
//     return arr.reduce((acc,cur) => acc+cur)
// }

// function myAnswer1(m, arr){
//     let answer = 0
    
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr.slice(j,j+i+1).length < i) continue;
//             else if(sum(arr.slice(j,j+i+1)) === m) answer++;
//             else continue;
//         }
//     }
//     return answer
// }

// console.log(myAnswer1(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// =======================
function solution(m, arr){
let answer = 0
let lt= 0
let sum = 0

for(let rt=0; rt<arr.length; rt++){
    sum += arr[rt];
    if(sum === m) answer++;
    while(sum >= m){
        sum -= arr[lt++];
        if(sum === m) answer++;
    }
}

return answer
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));