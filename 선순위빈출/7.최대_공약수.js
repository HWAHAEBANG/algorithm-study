function gcd(a,b){
    let remain = a % b

    if(!remain) return b

    return gcd(b, remain)
}

console.log(gcd(24,48));