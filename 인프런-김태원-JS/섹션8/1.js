let arr = []

function myAnswer(n){
    if(n === 0) return;

    arr.push(n)
    myAnswer(n-1)

    return arr.reverse() 
}

console.log(myAnswer(3));


// ;;;; ㅈㅅ
// 어.... 사실 원리는...맞다고 볼 수 있긴함..

function solution(n){
    
    function DFS(L){
        if(L===0) return;
        DFS(L-1)
        console.log(L);
    }


    DFS(n)
}

solution(3);
