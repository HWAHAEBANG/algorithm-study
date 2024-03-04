// 이진수로 바꿔서 1개수 세는 것과 같은 문제........ 어째서..?
// 어떤 수 a에 2를 곱하는 방법을 a * 2로 생각할 수 있지만 시프트 연산(a << 1) 도 동일한 결과입니다. 왼쪽 시프트 연산의 경우 이진수 관점에서 가장 오른쪽에 0을 넣는 것과 마찬가지죠 ( "0b101" << 1 = "0b1010"). 주어진 수를 이진수로 바꾸어 보면 1이 나오는 위치에서 1칸 이동(에너지 1) 0이 나오는 위치에서 2배 이동(에너지 0)하면 되니, 답은 n을 이진수로 바꿨을 때 1의 갯수입니다.

function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    console.log(nArr);
    return nArr.reduce((a,b)=>(+a)+(+b));
}

console.log(solution(5));


// 이것도 결국 같은 원리

// function solution(n) {
//     let answer = 1;

//     while(n !== 1) {
//         n = n/2;

//         // n이 짝수가 아니거나 자연수가 아닐 때
//         if(n % 1 !== 0) {
//             n = Math.floor(n);
//             answer += 1;
//         }
//     }

//     return answer;
// }


console.log(2);