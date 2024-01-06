// 짧은 변들의 합이 제일 긴 변보다 길어야 삼각형이 될 수 있지.
function myAnswer(a, b, c){
    let answer   

    const line = [a, b, c]
    const sortedArray = line.sort()

    if(sortedArray[2] < sortedArray[0] + sortedArray[1]){
        return 'YES'
    } else {
        return "NO"
    }
    }

console.log((myAnswer(6,7,11)));
console.log((myAnswer(13,33,17)));


//=================================================

// 솔트를 쓰지 않는 방법
function solution (a, b, c) {
    let answer = "YES", max;
    const sum = a + b + c;

    if(a > b) max = a;
    else max = b;
    if(max < c) max = c
    if(sum - max <= max) answer = 'NO'
    return answer
}

console.log((solution(6,7,11)));
console.log((solution(13,33,17)));