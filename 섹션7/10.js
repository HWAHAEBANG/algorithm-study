function myAnswer(m, arr){
    let answer
    let half
    let halfArr = arr

    arr.sort((a, b)=> a-b)
    console.log(arr);

    
    while(half !== 0){
        half = halfArr.length/2
        if(halfArr.slice(0, half).includes(m)) halfArr = halfArr.slice(0, half)
        else halfArr = halfArr.slice(half, halfArr.length)
        console.log(halfArr);
    }
    


    return answer
}

// console.log(myAnswer(32, [23, 87, 65, 12, 57, 32, 99, 81]));

// while을 쓰는 접근법 까지는 좋았지만, 공식을 따르는게 좋겠음.
// 안덱스를 어떻게 계산할지에 대한 아이디어가 없었음.


function solution(target, arr){
    let answer
    arr.sort((a, b)=> a-b)
    let lt = 0
    let rt = arr.length-1

    while(lt <= rt){
        let mid = parseInt((lt+rt)/2) // parseInt 꼭해야함! 부동소수점!
        if(arr[mid] === target){
            answer = mid+1
            break;
        }
        if(arr[mid] > target) rt = mid-1
        else lt = mid+1
    }

    return answer
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));