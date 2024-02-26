function myAnswer(str){
    let answer = 'NO'
    let lowStr = str.toLowerCase()
    let n = lowStr.length
    let center = Math.floor(lowStr.length/2)
    

    if( n % 2 === 0 ){
        if(lowStr.slice(0,center) === lowStr.slice(center).split("").reverse().join("")) answer = "YES"
    } else {
        if(lowStr.slice(0,center) === lowStr.slice(center+1).split("").reverse().join("")) answer = "YES"
    }

    return answer
}

console.log(myAnswer('gooG'));

// ====================================
// 두 번째 알려준 방법을 보면 접근법은 나랑 비슷한데, 홀수짝수를 굳이 구분하지 않는 모습을 볼 수 있음.

function solution1(str){
    let answer = 'YES'
    str = str.toLowerCase();
    let len = str.length
    for(let i=0; i<Math.floor(len/2); i++){
        if(str[i] !== str[len-i-1]) answer === 'NO';
    }
    return answer
}

console.log(solution1('gooG'));
//=====================================
function solution2(str){
    let answer = 'YES'
    str = str.toLowerCase();
    // 나는 반만 리버스해서 비교했는데 그냥 전체를 리버스해서 비교해버리네. 그러면 짝수홀수 구분 필요없긴하지.
    if(str === str.split('').reverse().join('')) answer === 'No';
    return answer
}

console.log(solution2('gooG'));