function gcd(a, b){
    let remain = a % b

    if(!remain) return b 

    return gcd(b, remain)
}

/**주의할 점: 마지막 재귀 호출 앞에 return을 뺴먹으면 안된다.
 * DFS를 생각해서 빼먹었다간 오류가 발생한다.
 * 생각을 해보자.
 * if문에서 바로 return이 실행된다면 문작 되지않는다.
 * 하지만 a가 b로 나누어 떨어지지 않는 경우 재귀가 호출된다.
 * 이 때 한차례 재귀로 결과가 나오게 됐다고 치다.
 * b리턴 되는데 리턴되는 자리가 어디인가?
 * 재귀호출문이 있는 위치이다. 만약 여기 return이 없다면?
 * 재귀해서 나온 결과 값이 최종적으로 return 되지 않는 것이다.
 * */ 

// console.log(gcd(4,2));


function lcm(a, b){
    return a*b / gcd(a,b)
}

console.log(lcm(2,5));