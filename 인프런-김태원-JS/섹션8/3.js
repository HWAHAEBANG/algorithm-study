// 먼저 보고 기억해서 만듯 것

function solution(n){
    let 전위순회 = []
    let 중위순회 = []
    let 후위순회 = []



    function DFS(L){
        if(L > 7) return;
        전위순회.push(L)
        DFS(L*2)
        중위순회.push(L)
        DFS(L*2+1)
        후위순회.push(L)
    }

    DFS(n)

    console.log(전위순회);
    console.log(중위순회);
    console.log(후위순회);
}

console.log(solution(1));