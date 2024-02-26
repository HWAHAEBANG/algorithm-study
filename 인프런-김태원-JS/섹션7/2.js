// 접근 방법은 맞긴했는데, 한 가지 간과한 부분이 있음.
// 버블 정렬은 보통 오른쪽에서부터 왼쪽으로 순회하면서 정렬를 진행하는 개념임
// 왜냐하면 그렇게해야 배열의 왼쪽 첫번째부터 순차적으로 정렬이 되기때문임.
// 하지만 코드 구현할 떄는 오른쪽 부터 돌면 코드가 지저분히지는 감이 있기 때문에 왼쪽부터 돌았음.
// 그렇게 되면 두번째 for문에서 주의해야될 점이.  for(let j=i; j<arr.length; j++) 가 아니라  for(let j=0; j<arr.length-i-1; j++) 이 되어야함.
// 정렬이 오른쪽 끝부터 진행되기 때문
// 아래 답이 잘 나온 이유는 운이 좋았기 때문인듯

function myAnswer(arr){
    let answer = arr

    for(let i=0; i<arr.length-1; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]]=[arr[j+1],arr[j]]
        }
    }

    return answer
}

console.log(myAnswer([13, 5, 11, 7, 23, 15]));
console.log(myAnswer([23, 11, 3, 15, 13, 7])); // 다른 배열을 시도해보니 바로 버그가 있음을 알 수 있음. 테스트케이스 여러개 돌려보기!

//====================================

function solution(arr){
    let answer = arr

    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]]=[arr[j+1],arr[j]]
        }
    }

    return answer
}

console.log(solution([13, 5, 11, 7, 23, 15]));
console.log(solution([23, 11, 3, 15, 13, 7]));