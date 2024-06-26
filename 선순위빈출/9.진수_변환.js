let dec = 123 // 문자면 안됨.
let hex = '7b'
let bin = '1111011'

// 10진수 => 2진수
console.log('10진수 => 2진수', dec.toString(2));

// 10진수 => 8진수
console.log('10진수 => 8진수', dec.toString(8));

// 10진수 => 16진수
console.log('10진수 => 16진수', dec.toString(16));

// 16 진수 => 2진수 (10진수로 바꿨다가 2진수로)
console.log('16진수 => 2진수', parseInt(hex, 16).toString(2));

// 16진수 => 10진수
console.log('16진수 => 10진수',parseInt(hex, 16)); // 123

// 2진수 10진수
console.log('2진수 => 10진수', parseInt(bin, 2));

// 2진수 16진수 (10주로 바꿨다가 16진수로)
console.log('2진수 => 16진수', parseInt(bin, 2).toString(16));


function binaryConvertor(n){
    let answer = ''
    
    function subFunc(L){
        if(L === 0){
            return;
        }else{
            answer = L % 2 + answer
            subFunc(parseInt(L/2))
        }
    }

    subFunc(n)

    return answer
}

console.log('2진법 변환기',binaryConvertor(10));


function decimalConvertor(n){
    let answer = 0

    for(let i=0; i<n.length; i++){
        answer += Number(n[n.length-i-1] * 2**i)
    }

    return answer
}

console.log('10진법 변환기',decimalConvertor('1010'));



function practiceBinary(n){
    let answer = ''

    function subFunc(L){
        if(L === 0){
            return;
        }else{
            answer = L % 2 + answer 
            subFunc(parseInt(L/2))
        }
    }

    subFunc(n)

    return answer;
}


console.log('연습이진수', practiceBinary(10));


function practiceDecimal(n){
    let answer = 0

    for(let i=0; i<n.length; i++){
        answer += n[n.length-1-i] * 2**i
    }

    return answer
}

console.log('연습십진수',practiceDecimal('1010'));

//==========

// 10진수 => 2진수
console.log('10진수 => 2진수', dec.toString(2));

// 10진수 => 8진수
console.log('10진수 => 8진수', dec.toString(8));

// 10진수 => 16진수
console.log('10진수 => 16진수', dec.toString(16));

// 16 진수 => 2진수 (10진수로 바꿨다가 2진수로)
console.log('16진수 => 2진수', parseInt(hex, 16).toString(2));

// 16진수 => 10진수
console.log('16진수 => 10진수',parseInt(hex, 16)); // 123

// 2진수 10진수
console.log('2진수 => 10진수', parseInt(bin, 2));

// 2진수 16진수 (10주로 바꿨다가 16진수로)
console.log('2진수 => 16진수', parseInt(bin, 2).toString(16));

// 이진수 변환기
function practiceBinary1(n, answer){
    answer = answer || ''
    if(n <= 1) return n + answer 
    else {
        answer = n%2 + answer
        return practiceBinary1(parseInt(n/2), answer)
    }
}

console.log('연습이진수1', practiceBinary1(10));

// 이게 되네 한줄로......
function practiceBinary11(n){
   return n <= 1 ? `${n}` : practiceBinary11(parseInt(n/2)) + n%2 
}

console.log('연습이진수11', practiceBinary11(10));


// 십진수 변환기
function practiceDecimal1(n){
    let decimal = 0
    
    for(let i=0; i<n.length; i++){
        decimal += n[n.length - i -1] * 2**i
    }

    return decimal
}

console.log('연습십진수',practiceDecimal('1010'));

//===========================================================================

// 10진수 => 2진수
console.log(dec.toString(2));

// 10진수 => 8진수
console.log(dec.toString(8));

// 10진수 => 16진수
console.log(dec.toString(16));

// 16 진수 => 2진수 (10진수로 바꿨다가 2진수로)
parseInt(hex, 16).toString(2);

// 16진수 => 10진수
parseInt(hex, 16);

// 2진수 10진수
parseInt(bin, 2);

// 2진수 16진수 (10주로 바꿨다가 16진수로)
parseInt(bin, 2).toString(16);

// 이진수 변환기
function practiceBinary2(n){
    return n <= 1 ? n.toString() : practiceBinary2(parseInt(n/2)) +  n%2
}

console.log('연습이진수2', practiceBinary2(10));

// 십진수 변환기
function practiceDecimal2(n){
    let answer = 0

    for(let i=0; i<n.length ;i++){
        answer += parseInt(n[n.length-i-1])*2**i
    }

    return answer
}

console.log('연습십진수2',practiceDecimal2('1010'));

