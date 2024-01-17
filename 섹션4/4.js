// 기권.

function myAnswer(budget, arr){
    let answer = []
    let tmp = []
    let sum = 0

    for(let i = 0; i<arr.length; i++){
        tmp.push(arr[i][0] + arr[i][1])
    }

    console.log(tmp);

    for(let i = 0; i<tmp.length; i++){
       if(sum < budget){
        sum += tmp[i] 
        answer.push(arr[i])
       } 
    }

    return answer
}

// console.log(myAnswer(
//     28,
//     [
//         [6, 6],
//         [2, 2],
//         [4, 3],
//         [4, 5],
//         [10, 3],
//     ]
// ));

// ===================================
function solution(m, arr){
    let answer = 0;
    let n = arr.length;
    arr.sort((a,b)=>((a[0]+a[1]) - (b[0]+b[1]))); // 이렇게 더해서 솔트도 가능하네
    for(let i=0; i<n; i++){ // 모든 경우의 수 (할인했을 때의 각각의 경우의수)를 다 계산하고 비교하네.
        let money = m - (arr[i][0]/2 + arr[i][1]);
        let cnt = 1;
        for(let j=0; j<n; i++){
            if(j!==i && arr[j][0] + arr[j][1] > money) break;
            if(j!==i && arr[j][0] + arr[j][1] <= money){
                money -= (arr[j][0] + arr[j][1]);
                cnt++
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer
}

console.log(solution(
    28,
    [
        [6, 6],
        [2, 2],
        [4, 3],
        [4, 5],
        [10, 3],
    ]
));