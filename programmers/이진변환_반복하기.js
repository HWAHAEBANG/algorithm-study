// function binery(n){
//     let answer = ''

//     function DFS(L){
//         if(L === 0) return;
//         DFS(parseInt(L/2))
//         answer += String(L%2)
//     }

//     DFS(n)    

//     return answer
// }

// function solution(s) {
//     let hey = 'ㅋ'
//     let zeroCnt = 0
    
//     function trans(L,str, acc){
//         let oneCnt = 0
//         let answer = ''
        
//         if(str === '1'){
//             return hey= [L,acc]
//         }else{
//             for(let x of str){
//             if(x === '1') oneCnt++
//             else zeroCnt++
//         }
    
//         trans(L+1,binery(oneCnt), zeroCnt)  
//         }

//     }
//     trans(0, s,0)
    
//     return hey
// }

function solution(s){
    let answer = [0,0]
    while(s !== '1'){
        answer[0]++
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g,'').length.toString(2)
    }

    return answer
}

console.log(solution("110010101001"));