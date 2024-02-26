function myAnswer(arr){
    let answer = []

    for(let i=0; i<arr.length ; i++){
        let reverseInt = parseInt(arr[i].toString().split('').reverse().join(''))

        let isPrimeNumber = true
        for(let j = reverseInt-1; j >= 2; j--){
            if(reverseInt % j === 0 ) isPrimeNumber = false
        }

        if(isPrimeNumber && reverseInt !== 1) answer.push(reverseInt)
    }

    return answer
}

console.log(myAnswer([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// ================================
// 나처럼 내장함수 써서 하는 것도 맞지만 조금 더 코테답게 풀면 아래와 같음.

function isPrime(num){
    if(num === 1) return;
    for(let i = 2; i<parseInt(Math.sqrt(num)); i++){ // 약수 특성상 제곱근까지만 확인해도 답은 나옴.
        if(num % i === 0) return false;
    }
    return true;
}

function solution(arr){
    let answer = []

    for(let x of arr){
        let res = 0;
        while(x){ // 어렵네...
            let t = x % 10
            res = res * 10 + t
            x = parseInt(x/10) // 이게 변경 되네?
        }
        if(isPrime(res)) answer.push(res);
    } 

    return answer
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

//================================
// 위 코드에 내장함수를 곁들이면 다음과같음. (내가 만든 코드랑 사실상 같음)

function solution1(arr){
    let answer = []

    for(let x of arr){
        let res = Number(x.toString().split('').reverse().join(''))
         if(isPrime(res)) answer.push(res);
    } 

    return answer
}

console.log(solution1([32, 55, 62, 20, 250, 370, 200, 30, 100]));