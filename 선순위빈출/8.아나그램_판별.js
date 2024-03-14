function anagram(a,b){
    let answer = 'yes'

    let sH = new Map()

    for(let x of a){
        if(sH.has(x)) sH.set(x, sH.get(x)+1)
        else sH.set(x, 1);
    }

    for(let x of b){
        if(!sH.has(x) || sH.get(x) === 0)answer = 'no'
        else sH.set(x, sH.get(x)-1)
    }

    return answer
}

console.log(anagram('AbaAeCe', 'baeeACA'));
console.log(anagram('abaCC', 'Caaab'));


function practice1(a, b){
    let answer = 'YES'
    let sH = new Map();

    for(let x of a){
        if(sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1)
    }

    for(let x of b){
        if(!sH.has(x) || sH.get(x) === 0) answer = 'NO' 
        else sH.set(x, sH.get(x) - 1);
    }

    return answer
}

console.log(practice1('AbaAeCe', 'baeeACA'));
console.log(practice1('abaCC', 'Caaab'));