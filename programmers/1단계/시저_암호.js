// 다답 아스키코드 없이 구하기
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}


// 내답
function solution(s, n) {
  let arr = s.split('')
  console.log(arr)
    for(let i=0; i<arr.length; i++){
        if(arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90){
            if(arr[i].charCodeAt() + n > 90) arr[i] = String.fromCharCode(arr[i].charCodeAt() + n - 90 + 64)
            else arr[i] = String.fromCharCode(arr[i].charCodeAt() + n)     
        } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122){
            if(arr[i].charCodeAt() + n > 122) arr[i] = String.fromCharCode(arr[i].charCodeAt() + n - 122 + 96)
            else arr[i] = String.fromCharCode(arr[i].charCodeAt() + n)
        }
        
    }
    return arr.join('')
}