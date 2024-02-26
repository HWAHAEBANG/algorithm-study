function myAnswer(arr1, arr2){
    let answer

    return answer = [...arr1, ...arr2].sort((a, b)=> a - b)
}

console.log(myAnswer([1, 3, 5], [2, 3, 6, 7, 9]));

// ====================================
// sort를 사용하면 편하겠지만 nlogn의 시간 복잡도가 발생함.
// 때문에 투포인터 알고리즘을 사용할 것임.

function solution(arr1, arr2) {
    let answer = [] 
    let n = arr1.length
    let m = arr2.length
    let p1 = p2 = 0

    while (p1 < n && p2 < m){
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
        else answer.push(arr2[p2++])
    }

    while (p1 < n) answer.push(arr1[p1++])
    while (p2 < m) answer.push(arr2[p2++])

    return answer
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));