// 다답...와....
function solution(s){
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i<s.length; i++){
        let arr = answer.split(numbers[i]) // 없앴다가
        console.log(arr);
        answer = arr.join(i) // 조인하면더 숫자로 넣음...
    }

    return Number(answer)
}


// 내답
function solution(s) {
    let answer = []
    let table = {zero:'0', one:'1', two:'2', three:'3', four:'4', five:'5', six:'6', seven:'7', eight:'8', nine:'9'}
    
    let left = 0
    let right = 0
    
    while(right !== s.length){
        let tmp = s.slice(left, right+1)
        if(!isNaN(tmp)) {
            answer.push( s.slice(left, right+1))
            left++
        }
        if(table[tmp]){
            answer.push(table[tmp])
            left = right+1
        }
    right++
    }
    return Number(answer.join(''))
}