// 내답다답동일
function solution(arr1, arr2) {
    var answer = arr1 ; // [[],[]] 하면 안된다.  arr1[0].length 가 0이된다.
    
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j] 
        }
    }
    
    return answer
}