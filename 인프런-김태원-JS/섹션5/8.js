// T로 맵을 만든다.
// S를 투포인트로 순회하면서 get을 하면서 카운팅한다?
// 기권

function myAnswer(S, T){
    let answer = 0;
    let mapT = new Map();
    let lt = 0;

    for(let x of T){
        if(mapT.get(x)) mapT.set(x,mapT.get(x)+1)
        else mapT.set(x, 1)
    }

    for(let rt=0; rt<S.length; rt++){
        
    }

    console.log(mapT);


    return answer
}

console.log(myAnswer('bacaAacba','abc'));

// ================================
// 투포인터, 해시맵, 슬라이딩 윈도우 다 적용된 문자라고함. 어려울 수밖에

function compareMap(map1, map2){
    if(map1.size !== map2.size) return false;
    for(let [key, val] of map1){
        if(!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}

function solution(s, t){
    let answer = 0;
    let tH = new Map();
    let sH = new Map();

    for(let x of t){
        if(tH.has(x)) tH.set(x, tH.get(x)+1);
        else tH.set(x, 1);
    }

    let len = t.length-1;
    for(let i=0; i<len; i++){
        if(sH.has(s[i])) sH.set(s[i], sH.get(s[i]+1));
        else sH.set(s[i], 1);
    }

    let lt=0;
    for(let rt=len; rt<s.length; rt++){
        if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
        else sH.set(s[rt], 1);
        if(compareMap(sH, tH)) answer++;
        sH.set(s[lt], sH.get(s[lt])-1);
        if(sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }

    return answer
}

console.log(solution('bacaAacba','abc'));