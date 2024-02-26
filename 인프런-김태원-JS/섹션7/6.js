// 정확함.
// 솔루션은 사실 sort 메서드로 푸셨는데, 전략적인 생각으로 거의 정렬된 배열이니 삽입정렬이 가장 효율 적일거라는 판단 좋았음.

function mySolution(arr){
    let sortedArr = [...arr] 
    let answer = []

    for(let i = 1; i < sortedArr.length; i++){
        for(let j=i-1; j>=0; j--){
            if(sortedArr[j] > sortedArr[j+1]){
                [sortedArr[j], sortedArr[j+1]] = [sortedArr[j+1], sortedArr[j]]
            }
        }
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== sortedArr[i]) answer.push(i+1)
    }
    
    
    return answer
}

console.log(mySolution([120, 125, 152, 130, 135, 13, 143, 127, 160]));
console.log(mySolution([120, 130, 150, 150, 130, 150]));