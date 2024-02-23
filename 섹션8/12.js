// 접근 방식 매우 훌륭했음

function DFS(n, r){
    if(r === 1){
        return n
    } else if (n === r) {
        return 1
    } else {
        return DFS(n-1, r-1) + DFS(n-1, r)
    }
}

console.log(DFS(5,3))
console.log(DFS(33,19));


// 하지만 콤비네이션의 r이 0 인 경우 결과 1이라는 걸 감안했으면, else if를 안 쓸 수 있었음
// 그리고 메모이제이션 기법에 대해서도 사용해 볼 수가 있음.
// 메모이제이션을 사용하려면 중첩합수로 구현해야하겠음.

function solution(n, r){
    let answer
    let dy = Array.from(Array(35), ()=>Array(35).fill(0)) //  빈배열 만들 때 각각 n이랑 r넣으면 딱 될 줄 알았는데 안 됨. 왜지?

    function DFS(n,r){
        if(dy[n][r] > 0) return dy[n][r] 
        if(r === 0 || n === r) return 1
        else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r)
    }

    answer = DFS(n,r)
    // console.log(dy); // 원래 이렇게 이상하게 나오나봄
    return answer
}

console.log(solution(5,3));
console.log(solution(33,19));