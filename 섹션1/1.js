function myAnswer(a, b, c){
    if(a > 100 | b > 100 | c > 100) return console.log('exceed maximum value');
    let min 
    min = a < b ? a : b;
    min = min < c ? min : c

    return min
    }

console.log((myAnswer(6, 5, 11)));
