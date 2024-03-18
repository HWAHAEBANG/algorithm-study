// 다른 사람 풀이
function solution(n){
    return (n+'').split('').reduce((acc, cur) => acc + parseInt(cur), 0)
}


// 내 답
// function solution(n){
//     let answer = 0
//     let arr = n.toString().split('');
    
//     for(let x of arr){
//         answer += parseInt(x)
//     }

//     return answer;
// }