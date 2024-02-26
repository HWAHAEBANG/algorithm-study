function solution(arr){
    let flag = 0;
    let answer = "NO"
    let total = arr.reduce((a, b)=> a + b)
    let n = arr.length
    function DFS(L, sum){
        if(flag) return;
        if(L === n){
            if((total-sum) === sum) answer = 'YES' // 왜 parseIng(total/2) === sum은 안되는거지?
        } else {
            DFS(L+1,sum+arr[L])
            DFS(L+1,sum)
        }
    }

    DFS(0, 0) // 입력받은 배열의 첫번째 요소부터 시작할 거고, 합도 0부터 시작하니까

    return answer
}

console.log(solution([1, 3, 5, 6, 7, 10]));