function myAnswer(n, arr){
    let answer = arr
    arr.sort((a, b)=> a - b)

    let lt = arr[0]
    let rt = arr[arr.length-1]

    let mid = parseInt((lt+rt)/2)

    console.log(mid);

    return answer
}

console.log(myAnswer(3, [1,2,8,4,9]));


// 대충 이분탐색 코드는 익숙해졌는데 여전히 count가 어려움.
// 아 꼭 다시보자
function count(stable, dist){
    let cnt=1, ep=stable[0];
    for(let i=1; i<stable.length; i++){
        if(stable[i]-ep >= dist){
            cnt++
            ep=stable[i]
        }
    }
    return cnt;
}

function solution(c, stable){
    let answer
    stable.sort((a,b) => a-b)

    let lt = 1 // 1로 해야함. 이유 생각 안나면 영상 참조
    let rt = stable[stable.length-1]

    while(lt <= rt){
        let mid = parseInt((lt+rt)/2)
        if(count(stable, mid)>=c){
            answer = mid;
            lt = mid+1
        }
        else rt = mid-1;
    }
    return answer 
}

console.log(solution(3, [1,2,8,4,9]));