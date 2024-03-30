// 재귀를 사용하되 최적화 하기 위해 메모이제이션을 사용할 수 있다.

// function fib(n){ // 이거 이상함 memo가 항상[0,1임]
//     let memo = [0, 1]

//     function subFunc(n){
//         if(memo[n]) return memo[n]
//         console.log(memo);
//         return n <= 0 ? memo[n] : memo[n] = subFunc(n-1) + subFunc(n-2)
//     }
//     return subFunc(n)
// }

// console.log(fib(10));
// console.log(fib(77));


function fibonacci(n, memo) {
  memo = memo || {};

//   console.log(memo);

  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}

console.log(fibonacci(10));
console.log(fibonacci(77));

//★★★★★★★★★★★★★
function practice1(n, memo){
    memo = memo || {}

    if(memo[n]) return memo[n]
    if(n <= 1) return n
    
    return memo[n] = practice1(n-1,memo) + practice1(n-2, memo)
}

console.log(practice1(10));
console.log(practice1(77));


function practice2(n, memo){
    memo = memo || {}

    if(memo[n]) return memo[n]
    if(n <= 1) return n

    return memo[n] = practice2(n-1, memo) + practice2(n-2, memo)
}

console.log('이상무',practice2(10));
console.log('이상무',practice2(77));


function practice3(n, memo){
 memo = memo || {}

 if(memo[n]) return memo[n]
 return n <= 1 ? n : memo[n] = practice3(n-1, memo) + practice3(n-2, memo)
}

console.log('이상무',practice3(10));
console.log('이상무',practice3(77));