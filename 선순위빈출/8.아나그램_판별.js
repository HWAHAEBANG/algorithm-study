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


function practice2(a,b){
    let answer = 'yes'
    let sH = new Map();

    for(let x of a){
        if(sH.has(x)) sH.set(x, sH.get(x)+1)
        else sH.set(x, 1)
    }

    for(let x of b){
        if(!sH.has(x) || sH.get(x) <= 0) answer = 'no'
        else sH.set(x, sH.get(x)-1)
    }

    return answer
}

console.log(practice2('AbaAeCe', 'baeeACA'));
console.log(practice2('abaCC', 'Caaab'));


function practice3(a,b){
    let answer = 'yes';
    let sH = new Map()
    
    for(let x of a){
        if(sH.has(x)) sH.set(x, sH.get(x)+1)
        else sH.set(x, 1)
    }

    for(let x of b){
        if(!sH.has(x) || sH.get(x) <= 0) return answer = 'no' // 여기서 그냥 바로 리턴해버리면 불필요한 반복 줄일 수 있겠네
        else sH.set(x, sH.get(x)-1)  
    }

    return answer
}

console.log('하이',practice3('AbaAeCe', 'baeeACA'));
console.log('하이',practice3('abaCC', 'Caaab'));