function myAnswer(str1, str2){
    let answer = 'NO'
    let arr1 = str1.split('')
    let arr2 = str2.split('')

    while(arr2.length){
        if(arr1[0] === arr2[0]) {
            arr1.shift()
            arr2.shift()
        } else {
            arr2.shift()
        }
        if(arr1.length === 0) answer ='YES'
    }

    return answer
}

console.log(myAnswer('CBA', 'CBDAGE'));


// =========================
// arr2는 굳이 shift 하지 않아도 됐음. 배열료 만들지 않아도 됐고.

function solution(need, plan){
    let answer="YES";
    let queue=need.split('');
    for(let x of plan){
        console.log(queue.includes(x));
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO"; // 헷갈렸던 부분 조심. 위의 if문을 통과한 x는 need에 반드시 포함되어있는 것이라서, queue의 가장 처음것과 비교하면되는거 맞음.
        }
    }
    if(queue.length>0) return "NO";  
    return answer;
}

console.log(solution('CBA', 'CBDAGE'));