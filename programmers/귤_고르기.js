function solution(k, tangerine){
     let answer = 0
     let tDict = {};
     
    tangerine.forEach( t => tDict[t] = (tDict[t] || 0) + 1 );

    console.log(tDict);

    let tArr = Object.values(tDict).sort((a,b)=> b-a)
    console.log(tArr);

     for(let x of tArr){
        answer++
        if(k > x) k -= x
        else break
     }
     return answer
}



// 이것도 좋음
// function solution(k, tangerine) {
//     let answer = 0;
//     let tH = new Map();

//     for(let x of tangerine){
//         if(tH.get(x)) tH.set(x,tH.get(x)+1) 
//         else tH.set(x, 1)
//     }

//     let tmp = []

//     for(let [size, cnt] of tH){
//         tmp.push([size, cnt])
//     }

//     tmp.sort((a,b) => b[1]-a[1])

//     for(let i=0; i<tmp.length ;i++){
//         if(k <= 0) break;
        
//         k -= tmp[i][1]
//         answer += 1;
//     }

//     return answer;
// }

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));


// function solution(str){
//     let answer
//     let sH = new Map();

//     for(let x of str){
//         if(sH.has(x)) sH.set(x,sH.get(x) + 1)
//         else sH.set(x,1)
//     }

//     let max = Number.MIN_SAFE_INTEGER

//     for(let [key, val] of sH){
//         if(val > max){
//             max = val;
//             answer = key;
//         }
//     }

//     return answer
// }

// console.log(solution('BACBACCACCBDEDE'));

// 방법은 맞았으나 해쉬밥 쓸 생각을 못 떠올려서 실패
// function solution(k, tangerine) {
//     var answer = 0;
//     tangerine.sort((a,b)=>a-b)
//     console.log(tangerine);
//     let tmp = []

//     for(let x of tangerine){
//         let idx = tmp.findIndex(() => tmp[0] === x)
//         if(tmp.indexOf(x)) tmp[][1]++
//         else tmp.push([x,1])
//     }

//     console.log(tmp);

//     return answer;
// }

// console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));