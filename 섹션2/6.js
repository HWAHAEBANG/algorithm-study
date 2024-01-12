function myAnswer(arr){
    let answer = 0
    let sum = 0

    for(let i = 0 ; i<5; i++){
        for(let j=0 ; j<5 ; j++){
            sum += arr[i][j]
            if( j === 4 && answer < sum ) {
                answer = sum
            }
        }
        sum = 0
    }

    for(let i = 0 ; i<5; i++){
        let sum = 0
        for(let j=0 ; j<5 ; j++){
            sum += arr[j][i]
            if( j === 4 && answer < sum ) {
                answer = sum
            }
        }
        sum = 0
    }

    for(let i = 0 ; i<5; i++){
        sum += arr[i][i]
        if( i === 4 && answer < sum ) {
                    answer = sum
                    sum = 0
        }
    }

    for(let i = 0 ; i<5; i++){
        sum += arr[i][5-i]
        if( i === 4 && answer < sum ) {
                    answer = sum
                    sum = 0
        }
    }

    return answer
}


console.log(myAnswer([
    [10, 13, 10, 12, 15],
    [12, 39 ,30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
]));

// ==============================================
// i랑j를 교차하면 for문 하나로 퉁칠 수 있음. 시간 복잡도 대폭 감소

function solution (arr){
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = sum2 = 0;

    for(let i=0; i<n; i++){
        sum1 = sum2 = 0;
        for(let j=0; j<n; j++){
            sum1 = arr[i][j]
            sum2 = arr[j][i]
        }
        answer = Math.max(answer, sum1, sum2)
    }
    sum1 = sum2 = 0;

    for(let i=0; i<n; i++){
        sum1 = arr[i][i]
        sum2 - arr[i][n-i-1]
    }
    answer = Math.max(answer, sum1, sum2)

    return answer
}

console.log(myAnswer([
    [10, 13, 10, 12, 15],
    [12, 39 ,30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
]));