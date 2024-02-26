function solution(str){
    let answer = 'YES';
    let stack = [];

    for(let x of str){
        if(x === '(') stack.push(x)
        else{
            if(stack.length === 0) answer = 'NO' // 또는 return 'NO'
            stack.pop()
            }
        }

    if(stack.length > 0) answer = 'NO' // 또는 return 'NO'
    return answer;
}

console.log(solution('(())()'));
console.log(solution('(()()))'));
console.log(solution('(()(()))(()'));