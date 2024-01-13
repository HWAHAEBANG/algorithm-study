function myAnswer(str){
    let answer = 'NO';
    let temp = []

    for(let x of str){
        let asc = x.charCodeAt()
        if( (asc >= 65 && asc <= 90) || (asc >= 90 && asc <= 122)) temp.push(x)
    }

    let origin = temp.join('').toLowerCase()
    let reverse = temp.reverse().join('').toLowerCase()

    if(origin === reverse) answer = "YES"

    return answer
}

console.log(myAnswer('found7, time: study; Yduts; emit, 7Dnuof'));

// 65-90
// 97-122

//=======================================
function solution(str){
    let answer = 'YES'
    str = str.toLowerCase().replace(/[^A-z]/g, '');
    if(str !== str.split('').reverse().join('')) answer = 'No'
    console.log(str);
    console.log(str.split('').reverse().join(''));

    return answer
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));