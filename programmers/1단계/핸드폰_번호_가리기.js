// 정규식 사용한 답은 인상적.
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}


// 내답 좋다고 생각. 
function solution(phone_number) {
    let target = phone_number.length - 4
    return phone_number.split('').map((val, idx) => idx < target ? '*' : val).join('')
}