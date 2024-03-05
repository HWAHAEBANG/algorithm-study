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