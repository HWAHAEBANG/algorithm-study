
// ========================================
// 아래와 같은 방식으로 하면 재귀이긴 하지만 너무 오래걸림
// 떄문에 반복문을 사용해서 값을 재사용 하는 것이 더 최적화된 기법임.
// 재귀가 멋있어 보인다고 다 좋은 게 아님.

// 이렇게 하면 좀 더 짧게 표현 가능
function fib(n){
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}

console.log(fib(10));
console.log(fib(77));

// 내가 처음에 만든 재귀
      function fibo(n){
        if(n === 0) return 0
        else if (n === 1) return 1
        else return (fibo(n-1) + fibo(n-2))
      }

console.log(fibo(5)); // 5
console.log(fibo(10)); // 55
// console.log(fibo(100000)); // 55



function practice1(n){
  return n <= 1 ? n : practice1(n-1) + practice1(n-2)
}

console.log(practice1(10));
console.log(practice1(77));