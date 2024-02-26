function myAnswer(str){
    let answer = ''
    let stack = []

    for(let x of str){
        if(stack.length === 0 && x !== '(' && x !== ')') answer += x
        if(x === '(') stack.push(x)
        else if (x === ')') stack.pop();
    }

    return answer;
}

console.log(myAnswer('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));

// =====================================
// 솔직히 내가 만든 답안이 더 나은 것 같음.
// 내가 만든대로 하면 while문 안 써도 되는데..
// 저것도 사실상 이중포문이라 O(n^2)이라고 보는 게 맞지 않을까?

function solution (s) {
    let answer;
    stack = [] // 왜 자꾸 let 안 쓰시지? 이유가 있나?

    for(let x of s){
        if(x ===')'){
            while(stack.pop() !== '(');
        }
        else stack.push(x);
    }
    answer = stack.join('');
    return answer
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));