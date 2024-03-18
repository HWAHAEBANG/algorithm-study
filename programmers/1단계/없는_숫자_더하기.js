// 신박한 방법
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0)
}


// 다답. 배열 생성 안하고 푸는 방법.
function solution(numbers) {
    let sum = 0
    
    for(let i=0; i<=9; i++){
        if(!numbers.include(i)) sum += i
    }
    
    return sum
}


// 내 답. 실제 배열을 만들 필요 없었음.
function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9]
    
    for(let x of numbers){
        arr.splice(arr.indexOf(x),1)
    }
    
    return arr.reduce((acc, cur) => acc + cur)
}