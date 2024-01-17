// 기권.
function myAnswer(arr){
    let answer
    let testCnt = arr.length
    let studentCnt = arr[0].length
    
    for(let i = 0; i<studentCnt; i++){
        let tmp = [1,2,3,4]
        for(let j = 0; j<testCnt; j++){
            tmp = tmp.filter(item=> item === arr[j][i])
            console.log(tmp);
        }
    }

    return answer=''
}

// console.log(myAnswer(
//     [
//         [3, 4, 1, 2],
//         [4, 3, 2, 1],
//         [3, 1, 4, 2]
//     ]
// ));

// ====================================================
// 충분히 이해됐다고 생가되지 않음.
// 일단 4중포문이라는 것 자체가, 나 혼자였다면 고려하지 않을 선택지였음.
// 먼저 2중 포문으로 모든 쌍의 경우의 수를 만들고, 그걸 다시 포문으로 돌면서 비교하는 방법은 굉장히 참신함.
// 꼭 다시 풀어볼 것.
function solution(arr){
    let answer = 0
    let m = arr.length
    let n = arr[0].length

    for(let i=1; i<=n; i++){ // 0이 아닌 1이다. <가 아닌 <=d이다. !!m이 아닌 n이다 4x4 경우에 수 만드는 거지 않나 지금!!
        for(let j=1; j<=n; j++){
            let cnt = 0;
            for(let k = 0; k<m; k++){
                let pi = pj = 0
                for(let s = 0; s<n; s++){
                    if(arr[k][s] === i) pi = s;
                    if(arr[k][s] === j) pj = s;
                }
                if(pi<pj) cnt++;
            }
            if(cnt === m) answer++;
        }   
    }
    return answer
}

console.log(solution(
    [
        [3, 4, 1, 2],
        [4, 3, 2, 1],
        [3, 1, 4, 2]
    ]
));