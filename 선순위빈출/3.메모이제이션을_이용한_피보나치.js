// 재귀를 사용하되 최적화 하기 위해 메모이제이션을 사용할 수 있다.

function fib(n){
    let memo = [0, 1]

    function subFunc(n){
        if(memo[n]) return memo[n]
        return n <= 0 ? memo[n] : memo[n] = subFunc(n-1) + subFunc(n-2)
    }

    return subFunc(n)
}

console.log(fib(10));
console.log(fib(77));