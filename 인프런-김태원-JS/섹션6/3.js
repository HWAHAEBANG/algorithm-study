// 문제 똑바로 읽어라....
// 문제 다시고 푸니 맞긴했음.
// 접근법 양호했음
// 어려운 문제는 아니라고 함.

function myAnswer(board, moves){
    let answer = 0;
    let bucket = []

    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[j][moves[i]-1] !== 0) {
                if(bucket.at(-1) === board[j][moves[i]-1]){
                    bucket.pop()
                    answer += 2
                }else{
                    bucket.push(board[j][moves[i]-1])
                }
                board[j][moves[i]-1] = 0
                break;
            }
        }
    }

    return answer
}

console.log(myAnswer([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
], [1,5,3,5,1,2,1,4]));


function solution(board, moves){
    let answer = 0;
    let stack = []; // 변수명 스택 사용하심

    moves.forEach(pos => { // 고차함수 사용하심
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1] !== 0){
                let tmp = board[i][pos-1]; // 내가 처음에 쓴 방식과 같음.
                board[i][pos-1] = 0; // 0로 변경을 먼저 함. 나는 마지막에 해서 tmp가 필요 없었지.
                if(tmp === stack[stack.length-1]){ // 마지막 요소를 인덱스로 접근함. 나는 at.
                    stack.pop();
                    answer += 2;
                }
                else stack.push(tmp);
                break;
            }
        }
    });


    return answer
}


console.log(solution([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
], [1,5,3,5,1,2,1,4]));
