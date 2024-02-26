function myAnswer(str1, str2){
    let answer = 'YES';
    let map1 = new Map();
    let map2 = new Map();

    for(let i=0; i<str1.length; i++){
        if(map1.get(str1[i])) map1.set(str1[i], map1.get(str1[i])+1)
        else map1.set(str1[i], 1)
        
        if(map2.get(str2[i])) map2.set(str2[i], map2.get(str2[i])+1)
        else map2.set(str2[i], 1)
    }

    for(let x of str1){
        if(map1.get(x) !== map2.get(x)) answer = 'NO';
    }

    return answer
}

console.log(myAnswer('AbaAeCe', 'baeeACA'));
console.log(myAnswer('abaCC', 'Caaab'));

//=======================================
// 하나씩 빼는 방법
// 시간 복잡도 측면에선 비슷해보이긴 하는데, 맵을 하나 덜 쓰는 방법.
// 그리고 중간에 더이상 안 봐도 될 때, 중단 시켜버릴 수 있어서 문자열이 길 때 더 효율적 일듯
// sH.has(x) 쓰는 것도 잊지말자

function solution(str1, str2){
    let answer = 'YES';
    let sH = new Map();
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1)
        else sH.set(x, 1);
    }

    for(let x of str2){
        if(!sH.has(x) || sH.get(x) === 0) answer = 'No'
        else sH.set(x, sH.get(x)-1)
    }

    return answer;
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));