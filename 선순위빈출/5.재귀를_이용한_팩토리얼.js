// 구글링 보다 간결

function factorial(n){
    return n ? n * factorial(n-1) : 1;
}

console.log(factorial(5));


// 처음 짠 재귀
function solution(n){
    let answer

    function multiful(L,sum){
        if(L>n){
            answer = sum 
        }else{
            multiful(L+1, sum*L)
        }
    }
multiful(1,1)

return answer
}

console.log(solution(5));


function practice(n, mul){
    function subFunc(n){
        return
    }

    subFunc(1,1)
}

console.log(practice1(5));

// ★★★★★★★★★★★★ 지금보니 이상
function practice1(n, mul){
    mul = mul || 1

    if(n === 0){
        return mul;
    } else {
        mul *= n
        return practice1(n-1, mul)
    }

}

console.log(practice1(5));


function practice2(n, mul){
    mul = mul || 1

    if(n === 0){
        return mul
    } else {
        mul *= n
        return practice2(n-1, mul)
    }
}

console.log('이상무',practice2(20));


// ★★★★★★★★★★★★// ★★★★★★★★★★★★// ★★★★★★★★★★★★
function practice3 (n){
    return n === 1 ? 1 : practice3(n-1)*n
}

console.log('이상무',practice3(20));