// 다답 - 수학적 사고 시간복잡도 최적화
function solution(left, right){
    let acc = 0

    for(let i=left; i<=right; i++){
        if(Number.isInteger(Math.sqrt(i))) acc -= i
        else acc += i
    }
}


// 내답다답동일
function solution(left, right) {
    let acc = 0
    for(let i=left; i<=right; i++){
        let cnt = 0;
        for(let j=1; j<=i; j++ ){
            if(i % j === 0) cnt++ 
        }
        acc += cnt % 2 ? -i: i
    }
    return acc
}