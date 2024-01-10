// 땡. floor를 사용하지 않았음. 버그 발생가능성 있음.
function myAnswer(str){
    let answer, len = str.length

    if(len%2 === 0) answer = str.slice((len/2)-1,(len/2)+1)
    else answer = str.slice((len/2),(len/2)+1)

    return answer
}

console.log(myAnswer('study'));
console.log(myAnswer('good'));


// 
//subsrt을 사용해서 splice와 같은 원리로 사용할 수 있는데, MDN에서는 ES에서 곧 제거될 것이라 사용이 권장되지 않는다고 함.
//문자열은 substring이라는 메서드 사용할 수 있음 사용법은 slice랑 동일.

function solution(str){
    let answer, mid = Math.floor(str.length/2);

    if(str.length%2 === 0) answer = str.substring(mid-1,mid+1);
    else answer = str.substring(mid,mid+1);

    return answer 
}

console.log(solution('study'));
console.log(solution('good'));
