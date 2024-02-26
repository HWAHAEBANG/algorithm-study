//나이나믹 주제로 가장 유명한 거라고 함.. (LIS)
//아.. 난해한데
// 잘 와닿지 않음. 걍함.

function solution(arr){
    let answer = 0
    let dy = Array.from({length:arr.length}, ()=>0)
    dy[0] = 1
    for(let i=0; i<arr.length ;i++){
        max = 0;
        for(let j=i; j>=0; j--){
            if(arr[j]<arr[i] && dy[j]>max){
                max=dy[j]
            }
        }
        dy[i] = max+1
        answer = Math.max(answer, dy[i])
    }

    return answer
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));