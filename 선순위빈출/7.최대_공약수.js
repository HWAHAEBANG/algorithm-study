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

function practice2(a, b){
    let remain = a % b

    // if(remain === 0 ) return b

    // return practice(b, remain)

    return remain === 0 ? b : practice2(b, remain)
}

console.log(practice2(24,24));

function practice3(a,b){
    let remain = a % b

    // if(remain === 0) return b;

    // return practice3(b, remain)

    return remain === 0 ? b : practice3(b, remain)
}

console.log(practice3(24,24));
