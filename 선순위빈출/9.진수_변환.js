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