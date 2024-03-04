function solution(n){
    let answer
    let dp = Array.from({length: n+1}, () => 0)

    dp[1] = 1
    dp[2] = 2

    for(let i=3; i<n+1 ;i++){
        dp[i] = (dp[i-1] + dp[i-2])  % 1234567 // 여기에다 나눈다
    }

    console.log(dp);

    answer = dp[n]

    return answer
}

console.log(solution(6));