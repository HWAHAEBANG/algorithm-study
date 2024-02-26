function myAnswer(s){
    let answer = 0
    let count = 0

    for(let x of s){
        if(x === '(') count++
        else answer += --count
    }

    return answer
}

console.log(myAnswer('()(((()())(())()))(())'));
console.log(myAnswer('(((()(()()))(())()))(()())'));


// ====================================
// 신박한 접근법이었으나 답이 틀릴 때도 있음. 고려하지 못한 부분이 있었기 때문.
// ) 는 반드시 레이저를 의미하는게 아닐 수 있다는 것을 명심

function myAnswer1(s){
    let answer = 0
    let count = 0

    for(let i=0; i<s.length; i++){
        if(s[i] === '(') count++
        else {
            if(s[i-1] === ')') { // 처음에 이 부분을 간과했음.
                answer++
                count-- // 누락되지 않도록 주의
            }
            else answer += --count
        }
    }

    return answer
}

console.log(myAnswer1('()(((()())(())()))(())'));
console.log(myAnswer1('(((()(()()))(())()))(()())'));

// ======================================
// 사실상 접근 법은 똑같았다고 봐도 됨.
// 어차피 필요한 건 스택의 길이였기 때문에 나는 메로리 측면에서 굳이 스택을 만들지 않고 카운트를 올리는 식으로 푼 것 뿐임
// 이 경우에는 공간복잡도 적으로 봤을 때 오히려 더 효율적이었다고 할 수 있지

function solution(s){
    let answer = 0
    let stack = []

    for(let i=0; i<s.length; i++){
        if(s[i] === '(') stack.push(s[i]);
        else {
            stack.pop();
            if(s[i-1] === '(') answer += stack.length;
            else answer += 1;
        }
    }

    return answer
}

console.log(solution('()(((()())(())()))(())'));
console.log(solution('(((()(()()))(())()))(()())'));