// 미결

function solution(begin, target, words){
    let answer = 0
    let n = words.length
    let ch = Array.from({length:n}, ()=>0)
    let standard = begin
    let min = Number.MAX_SAFE_INTEGER
    let cnt = 0

        function compare(a, b){
        let cnt = 0
        for(let i=0; i<3; i++){
            if(a[i] !== b[i]) cnt++ 
        }
        if(cnt === 1){
            return true
        } else {
            return false
        }
    }

    function DFS(L){
        if(L === n){
            console.log(standard);
            // console.log(standard, target, standard===target, cnt);
            if(standard === target) answer = Math.min(min, cnt)
            standard = begin
        } else {
            let tmp
            for(let i=0; i<n; i++){
                if(compare(standard, words[i]) && ch[i] === 0){
                    tmp = standard
                    standard = words[i]
                    ch[i] = 1
                    cnt++
                    DFS(L+1)
                    standard = tmp
                    ch[i] = 0
                    cnt--
                }else{
                    
                }
            }
        }
    }


    
    DFS(0,0)

    return answer
}
// console.log(solution('lit','cog',["lot", "log", "cog"]));
console.log(solution('hit','cog',["hot", "dot", "dog", "lot", "log", "cog"]));
// console.log(solution('hit','cog',["hot", "dot", "dog", "lot", "cog", "log"]));
// console.log(solution('hit','cog',["hot", "dot", "dog", "lot", "log"]));


    // let queue = []
    // let standard = begin

    


    // queue.push(words[0])

    // console.log(queue);

    // while(queue.length){
    //     let x = queue.shift()

    //     if(compare(standard,x)){
    //         queue.push()
    //     }

    // }

    //===========
             // if(compare(standard, words[L])){
            //     standard = words[L]
            //     DFS(L+1)
            // }


// ===========

    // function DFS(L){
    //     if(L === n){
    //        if(standard === target) answer = L-1
    //     }else{
    //         for(let i=0; i<n ;i++){
    //             if(ch[i] === 0){
    //                 console.log('왜',standard, words[i],compare(standard, words[i]));
    //                 if(compare(standard, words[i])){
    //                     standard = words[i]
    //                     ch[i] = 1
    //                     DFS(L+1)
    //                 } else {
    //                     standard = words[i-1]
    //                 }
    //             }
    //         }
    //     }
    // }