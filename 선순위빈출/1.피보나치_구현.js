// 실제로 배열을 만든 다음 조회하는 방법
function solution1(n){
    let dp = []

    dp[0] = 0
    dp[1] = 1

    for(let i=2; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }

    return dp[n]
}


console.log(solution1(100000));

// 배열을 만들지 않고, 값을 재사용(?)하면서 더해나가는 방식
function solution2(n){
    let target
    let first = 0
    let second = 1

    for(let i=0; i <= n-2; i++){
        target = (first + second) % 1234567

        first = second
        second = target
    }

    return target
}

console.log(solution2(100000));


///========================

//for 문사용
function practice1(n){
    let dp = []
    
    dp[0] = 0
    dp[1] = 1

    for(let i=2; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }

    return dp[n]
}

console.log(practice1(100000));


//값을 재사용
function practice2(n){
    let target
    let first = 0
    let second = 1

    for(let i=2; i<=n; i++){
        target = (first + second) % 1234567

        first = second
        second = target
    }

    return target
}

console.log(practice2(100000));

function practice3 (n){
    let dp = []
    dp[0] = 0
    dp[1] = 1

    for(let i=2; i<=n ;i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }

    return dp[n]
}

console.log(practice3(100000));

function practice4(n){
    let target
    let first = 0
    let second = 1

    for(let i=0; i<=n-2; i++){
        target = (first + second) % 1234567

        first = second
        second = target
    }

    return target
}

console.log(practice4(100000));