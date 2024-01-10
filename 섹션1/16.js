// 내 방식이 더 낫지 않나..

function myAnswer(str){
    let answer = ''

    for(let x of str){
        if(!answer.includes(x)) answer+=x
    }

    return answer
}

console.log(myAnswer('ksekkset'));

//=========================================================

function solution(str){
let answer = '';

for(let i = 0; i<str.length; i++){
    if(i === str.indexOf(str[i])) answer += str[i]
}

return answer
}

console.log(solution('ksekkset'));


//=========================================================
// 번외 특정 문자 개수 찾아보기 k찾기
// 재귀함수를 사용해서 인덱스를 찾으면 다음 탐색은 그 다음부터 찾도록하는 로직
function solution1(str){
let answer = 0;
let pos = str.indexOf('k');

while(pos !== -1){
    answer++
    pos = str.indexOf('k', pos+1); // 두번째 인자는 탐색을 시작할 인덱스
}

return answer
}

console.log(solution1('ksekkset'));