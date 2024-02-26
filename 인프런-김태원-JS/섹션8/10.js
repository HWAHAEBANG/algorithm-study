function myAnswer(m, arr){
    let answer = []
    let n = arr.length
    let tmp = Array.from({length:m}, () => 0)

    function DFS(L){
        if(L >= n){
            answer.push(tmp)
        } else {jlaskdjflkfkjldfklksd
            tmp[L] = arr[L]
            DFS(L*2)    
            DFS(L*2+1)
        }
    }R
DFS(1)

    return answer
}

// console.log(myAnswer(2, [3,6,9]));

function myAnswer1(m, arr){
    let answer = []
    let n = arr.length
    let ch = Array.from({length:n}, () => 0)
    let tmp = []

    function DFS(L){
        if(L === m){
            for(let i=0; i<n; i++){
                if(ch[i]) tmp.push(arr[i])
            }
        // console.log(tmp);
         if(tmp.length === 2) answer.push(tmp)
        tmp = []
        } else {
            for(let i=0; i<n; i++){
                ch[i] = 1
                DFS(L+1) 
                ch[i] = 0 // 이 접근법은 훌륭했음. DFS의 원래를 이해한 것임.
            }    
        }
    }
DFS(0)

    return answer
}

console.log(myAnswer1(2, [3,6,9]));


// 하 어렵네... 순열이랑 조합은 외우다시피 해야한다고 함.
function solution(m, arr){
    let answer = []
    let n = arr.length
    let ch = Array.from({length:n}, () => 0)
    let tmp = Array.from({length:m}, () => 0)// 내 답과 다른점

    function DFS(L){
        if(L === m){
            answer.push(tmp.slice())// 내 답과 다른점
        } else {
            for(let i=0; i<n; i++){
                if(ch[i] === 0){ // 내 답과 다른점
                    ch[i] = 1
                    tmp[L] = arr[i] // 내 답과 다른점
                    DFS(L+1) 
                    ch[i] = 0
                }
            }    
        }
    }
DFS(0)

    return answer
}

console.log(solution(2, [3,6,9]));




