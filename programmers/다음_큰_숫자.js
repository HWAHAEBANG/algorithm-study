function solution(n){
    let flag = 1
    let oneCnt = getOneCnt(n)
    
    function getOneCnt(n){
        return n.toString(2).replace(/0/g,"").length
    }

while(flag){
    if(getOneCnt(++n) === oneCnt) flag = 0;
}

return n
}

console.log(solution(78));
console.log(solution(15));

// 

// function getBinery(n){
//     let answer = ''

//     function DFS(n){
//        if(n === 0){
//             return
//        } else {
//         answer = n%2 + answer
//        DFS(parseInt(n/2))
//        }
//     }

//     DFS(n)

//     return answer
// }

// function getOneCnt(n){
//     return getBinery(n).replace(/0/g,"").length
// }


// function solution(n){
// let flag = 1
// let oneCnt = getOneCnt(n)

// while(flag){
//     if(getOneCnt(++n) === oneCnt) flag = 0;
// }

// return n
    
// }

// console.log(solution(78));
// console.log(solution(15));