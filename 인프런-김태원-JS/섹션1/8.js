// 일단 초과된 인원이 몇개의 조합이 나올 수 있는지 경우의 수를 구해봤음. 도움이 될라나.// 전혀 필요 없었음 ㅋㅋ 근데 다른 문제 풀때 도움 될듯!

function myAnswer1(arr){
    let answer = 1

    const n = arr.length
    const k = arr.length - 7 // overCount

    for(let i = 0 ; i < k ; i++){
         answer *= (n-i) / (k-i) 
    }

    return answer
}


console.log(myAnswer1([20,7,23,19,10,15,25,8,13]));


// 풀긴 풀었지만 마지막에 고차함 수 썼고 개떡같이 풀었음. // ㄴㄴ 사실상 거의 맞았음.

function myAnswer2(arr){
    let answer = arr
    let sum = 0

    for(let x = 0 ; x < arr.length ; x++){
        sum += arr[x]
    }

    let a, b
    
    for(let i = 0 ; i <arr.length ; i++) {
        for(let j = 0 ; j < arr.length ; j++){
            if( i !== j ){
                if( arr[i] + arr[j] === 40) {
                    a = arr[i]
                    b = arr[j]
                }
            }
        }
    }
    


    return answer.filter( (i) => (i !== a && i !==b))
}

// 

console.log(myAnswer2([20,7,23,19,10,15,25,8,13]));


//=========================================
// 합계 정도도는 그냥 리듀스 써도 되나봄.
// for문을 도는 방식이 약간 다름. 내 방식대로 하면, 불필요한 연산이 생김. a,b  b,a 는 같은건데 각각 비교하고있으니!

function solution(arr){
    let answer = arr
    let sum = arr.reduce((acc, cur)=> acc + cur, 0);
    let flag = 0;

    for(let i=0; i < 8; i++){
        for(let j=1; j <9; j++){
            if(sum - (answer[i]+answer[j]) === 100){
                // i를 먼저 push하면 인덱스 당겨져서 오류 생기므로 뒤에있는 j부터 splice하는 것이 포인트.
                answer.splice(j, 1);
                answer.splice(i, 1);
                flag = 1;
                break;
                // 조건에 맞는게 여러개 나오면 오류생기으로 최초 발행하면 플러그를 up 시키면서 for문 탈출 필요
            }
        }
        if(flag === 1) break;
    }
    
    return answer
}

console.log(solution([20,7,23,19,10,15,25,8,13]));