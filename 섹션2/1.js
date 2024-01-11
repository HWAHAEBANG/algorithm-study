function myAnswer(arr){
            let answer;

            answer = arr.filter((_, idx)=> {
                if(idx === 0) return true
                else if(arr[idx-1] < arr[idx]) return true
            })

                return answer;
            }

console.log((myAnswer([7,3,9,5,6,12])));


// ==================================================
function solution (arr){
    let answer = [];

    answer.push(arr[0]);
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > arr[i-1]) answer.push(arr[i]);
    }

    return answer
}

console.log((solution([7,3,9,5,6,12])));
