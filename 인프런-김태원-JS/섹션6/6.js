// 실패
function myAnswer(n,k){
    let answer
    let arr = []
    let tmp = k

    for (let i =1; i<=n ;i++){
        arr[i-1] = i
    }

    // while (arr.length > 1){
        arr.splice(tmp-1, 1)
        // tmp += k
        // if(tmp.length > n) tmp %= n
    // }

    return arr
}

console.log(myAnswer(8, 3));

//====================================
function myAnswer1(n,k){
    let answer
    let queue = []

    for (let i =1; i<=n ;i++){
        queue[i-1] = i
    }

    let cnt = 1

    while (queue.length > 1){
        if(cnt % k === 0)queue.shift()
        else {
            queue.push(queue.shift())
        }
        cnt++
    }

    return answer = queue[0]
}

console.log(myAnswer1(8, 3));

//-------------------------------------
// 시간 복잡도 측면에서 내 로직이 더 나을줄 알았는데 생각해보니까 결국 돌게되는 횟수는 똑같을듯.

function solution(n, k){
 let answer
 let queue = Array.from({length: n}, (v, i) => i+1) // 배열 이렇게 생성하는 방법 주목

 while (queue.length){ // 0은 어차피 falsy한 값이니까 이렇게 써도 됨.
    // 이 내부는 내가 사용한 방법 써도 되지만, for문을 사용함.
    for(let i=1; i<k; i++)queue.push(queue.shift());
    queue.shift()
    if(queue.length === 1) answer = queue.shift(); // 뭐, shift해도되고 pop해도되고 인덱스써도 되고..
 }

 return answer
}

console.log(solution(8, 3));