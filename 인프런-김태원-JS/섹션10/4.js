// 개어렵네

function solution(m, coin){
    let answer = 0
    let dy = Array.from({length:m+1}, () => 1000) /// 왜 m+1? 왜 1000?
    dy[0] = 0

    for(let i=0; i<coin.length; i++){ // 0..1..2
        for(let j=coin[i]; j <= m; j++){
            dy[j] = Math.min(dy[j], dy[j-coin[i]]+1)  // 또 이해 안되면 인강 다시보기
        }
    }

    answer = dy[m]

    return answer
}

console.log(solution(15, [1,2,5]));