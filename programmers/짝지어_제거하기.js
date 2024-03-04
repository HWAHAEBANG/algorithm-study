function solution(s){
    let stack = []

    for(let i=0; i<s.length; i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }

    return stack.length === 0 ? 1 : 0
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));

// 그냥 땡
// function solution(s){
//     let arr = s.split('')

//     for(let i=0; i<s.length-1; i++){

//         if(s[i] === s[i+1]){
//             arr.splice(i,2)
//             if(s[i-1] === s[i]) arr.splice(i-1,2)
//         }

//     }

//     return arr
// }
