//이해 했음....

function solution(people, limit){
    let answer = 0
    let lp = 0
    let rp = people.length-1

    people.sort((a, b)=> a - b)

    while(lp <= rp){
        if(people[lp] + people[rp] > limit){
            rp--
        } else if (people[lp] + people[rp] <= limit)  { // else 쓰면 효율성 테케 통과.
            rp--
            lp++
        }

        answer++
    }

    return answer
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));

// function solution(people, limit) {
//     let answer = 0;
//     let left = 0;
//     let right = people.length - 1;

//     // 1)
//     people = people.sort((a, b)=> a-b);

//     // 2)
//     while(left <= right) {
//         if(people[left] + people[right] > limit) {
//             right -= 1;
//         } else if(people[left] + people[right] <= limit) {
//             left += 1;
//             right -= 1;
//         }

//         answer += 1;
//     }

//     return answer;
// }

// console.log(solution([70, 50, 50, 50], 100));
// console.log(solution([70, 80, 50], 100));

// 최초에 생각해 낸거
// 테케 거의 다털림
// 효율성도 다털림

// function solution(people, limit){
//     let answer = people.length

//     for(let i=0; i<people.length; i++){
//         for(let j=i+1; j<people.length; j++){
//             if(people[i] + people[j] <= limit) answer--
//     }
// }

//     return answer
// }

// console.log(solution([70, 50, 80, 50], 100));
// console.log(solution([70, 80, 50], 100));