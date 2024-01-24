function sum(arr){
    let answer
    return answer = arr.reduce((acc,cur)=> acc + cur)
}

function myAnswer(k, arr){
    let answer = Number.MIN_SAFE_INTEGER

    for(let i=0; i<arr.length-k+1; i++){
        if(answer < sum(arr.slice(i, i+k))) answer = sum(arr.slice(i, i+k))
    }

    return answer
}

console.log(myAnswer(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// ======================================
// 위처럼 하면 결국 sum을 매번 계산하는거라서 O(n^2)라고함.
// 투포인트 하듯이 하네
// 접근법은 얼추 맞는데, 답이 다름..

function attempt(k, arr){
    let sum = arr.slice(0,3).reduce((acc,cur)=> acc + cur);

    for(let i=0; i<arr.length-k; i++){
        if(sum < sum - arr[i] +arr[i+k]) sum += ( arr[i+k] - arr[i]) // if문을 써서 그런듯. 값이 계속 누적되어야하는데 뭐는 더해지고 안 더해지니. 반성.
    }

    return sum
}

console.log(attempt(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// ======================================

function solution(k,arr){
    let answer
    let sum = 0;

    for(let i=0; i<k; i++) sum += arr[i];
    answer=sum

    for(let i=k; i<arr.length; i++){
        sum += (arr[i]-arr[i-k]); // 이부분 유용해보이는데 영 익숙치가 않네
        answer = Math.max(answer, sum);
    }

    return answer
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));