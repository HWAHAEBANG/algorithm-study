// 훌륭하다. 시간 복잡도 n^2될 수도 있는 건데 n으로 잘 했음.

function myAnswer(arr){
    let answer = 0, max = 0

    for(let x of arr){
        if(max < x){
            max = x
            answer++
        }
    }

    return answer
}

console.log(myAnswer([130, 135, 148, 140, 145, 150, 150, 153]));


// ===================================
function solution(arr){
    let answer = 1, max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            answer++;
            max = arr[i];
        }
    }
    return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
