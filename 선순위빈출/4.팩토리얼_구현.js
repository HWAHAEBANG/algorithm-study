function factorial(n){
    let answer = 1

    for(let i=1; i<=n ;i++){
        answer *= i
    }

    return answer
}

console.log(factorial(5));

function practice1(n){
    let answer = 1

    for(let i=2; i<=n; i++){
        answer *= i
    }

    return answer
}

console.log(practice1(5));