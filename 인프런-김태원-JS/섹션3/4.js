// 시간 너무 오래걸렸음. 빡집중 필요.

function myAnswer(s, t){
    let answer = []

    for(let i = 0; i<s.length; i++){
        let temp = Number.MAX_SAFE_INTEGER
        for(let j = 0; j<s.length; j++){
            if(s[j] === t){
                if(Math.abs(i - j) < temp) temp = Math.abs(i - j)
            }
        if(j === s.length - 1) answer.push(temp)
        }
    }

    return answer;
}

console.log(myAnswer('teachermode', 'e')); 

//==================================================
// 한 뱡향으로 쭉 비교해서 배열 만든 뒤
// 반대방향으로 똑같이 진행하면서 더 작은 것으로 수정.

function solution(s, t){
    let answer = [];
    let p = 1000;

    for(let x of s){
        if( x === t ){
            p=0
            answer.push(p)
        }
        else{
            p++;
            answer.push(p)
        }
    }
    p = 1000;
    for(let i=s.length-1; i>=0; i--){
        if( s[i] === t ) p = 0;
        else {
            p++;
        }
        if(answer[i] > p) answer[i] = p
    }
    
    return answer;
}

console.log(solution('teachermode', 'e'));