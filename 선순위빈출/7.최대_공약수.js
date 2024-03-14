function gcd(a,b){
    let remain = a % b

    if(!remain) return b

    return gcd(b, remain)
}

console.log(gcd(24,48));


function practice1(a, b){
    let remain = a % b

    if(remain === 0) return b

    return practice1(b, remain)
}

console.log(practice1(24,48));