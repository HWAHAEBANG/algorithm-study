// 답은 나오긴 하는데 이래도 되나....

function myAnswer(arr){
    let answer = arr

    arr.sort((a, b)=> a[0]-b[0])
    arr.sort((a, b)=> {
        if(a[0] === b[0]) return a[1]-b[1]
    })

    return answer
}

console.log(myAnswer([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]));

// 한번에 해도 되넹.
function solution(arr){
    let answer = arr

    arr.sort((a,b)=>{
        if(a[0] === b[0]) return a[1]-b[1]
        else return a[0]-b[0]
    })
}

console.log(myAnswer([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]));


// 아무리 봐도 따로 해야되지 않나...