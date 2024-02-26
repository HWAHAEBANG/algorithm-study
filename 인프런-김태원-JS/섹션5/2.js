function myAnswer(arr1, arr2){
    let answer = []

    for(let x of arr1){
        for(let y of arr2){
            if(x === y) answer.push(y)
        }
    }

    return answer.sort((a,b) => a-b)
}

console.log(myAnswer([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

//=================================
// 이것도 투포인트 알고리즘을 사용하면 시간 복잡도를 O(n+m) 으로 단축시킬 수 있음.

function solution(arr1, arr2){
    let answer = []
    let p1 = p2 = 0

    arr1.sort((a, b)=> a-b)
    arr2.sort((a, b)=> a-b)

    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] === arr2[p2]){
            answer.push(arr1[p1++])
            p2++
        } else if (arr1[p1] < arr2[p2]) p1++
        else p2++
    }

    return answer
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));