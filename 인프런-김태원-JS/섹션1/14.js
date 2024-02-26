// 솔루션과 정확히 일치함. 솔류션에서는 최대값을 Number.MiN_SAFE_INTEGER 을 사용했는데
// 문자열 특성상 음의 정수가 나올 수 없기 때문에, 0으로 초기화하는게 더 적절하다고 생각함.

function myAnswer(arr){
    let answer
    let newArr = arr.slice(1)
    let max = 0

    for(let x of newArr){
        if(x.length > max){
            max =  x.length;
            answer = x
        }
    }

    return answer
}


console.log(myAnswer([ 5, 'teacher', 'tiem', 'student', 'beautiful', 'good' ]));