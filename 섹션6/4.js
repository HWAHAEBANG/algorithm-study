function myAnswer(str){
    let answer
    let stack = []

    for(let i=0; i < str.length; i++){
        if(/^[0-9]+$/.test(str[i])) stack.push(parseInt(str[i]))
        else {
            let b = stack.pop()
            let a = stack.pop()
            stack.push(eval(a+str[i]+b))
        }
    }

    return answer = stack[0]
}

console.log(myAnswer('352+*9-'));

// const result = /^hello/.test(str);
//======================================
// 접근법 아주 정확했음
// 단 for of를 쓰셨고 eval을 안 쓰고, 조건문으로 다양하게 처리한 것을 볼 수 있음
// 그리고 정규식을 안쓰고 isNaN을 활용했음 이렇게 했을 때, 문자열이라소 숫자인 것을 인식할 수 있음.

function solution(str){
    let answer
    let stack = []

    for(let x of str){
        if(!isNaN(x)) stack.push(Number(x));
        else {
            let rt = stack.pop()
            let lt = stack.pop()
            if(x==='+') stack.push(lt+rt)
            else if(x==='-') stack.push(lt-rt)
            else if(x==='*') stack.push(lt*rt)
            else if(x==='/') stack.push(lt/rt)
        }
    }
    return answer = stack[0]
}

console.log(solution('352+*9-'));