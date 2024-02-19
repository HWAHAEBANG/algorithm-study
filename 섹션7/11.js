function myAnswer(m, arr){
    let answer
    let sum = 0

    while(sum/2 > arr[arr.length]){
    for(i=0; i<arr.length-1; i++){
        sum += arr[i]
    }
     
    }


    return answer
}

// console.log(myAnswer(3, [1,2,3,4,5,6,7,8,9]));

// 이분탐색으로 찾는 문제였음 시야를 가지가 어렵네
// 이분탐색 코테에 많이 나온다고함. 철저히 숙지.

// count함수 로직이 가장 와닿지 않음.
function count(songs, capacity){
    let cnt = 1, sum = 0;
    for(let x of songs){
        if(sum + x > capacity){
            cnt++;
            sum = x;
        }
        else sum += x;
    }
    return cnt;
}


function solution (m, songs) {
    let answer
    let lt = Math.max(...songs)
    let rt = songs.reduce((a, b)=> a+b) 
    
    while(lt <= rt){
        let mid = parseInt((lt+rt)/2)
        if(count(songs, mid)<=m){
            answer=mid;
            rt = mid-1
        } else {
            lt = mid+1
        }
    }


    return answer
}

console.log(solution(3, [1,2,3,4,5,6,7,8,9]));