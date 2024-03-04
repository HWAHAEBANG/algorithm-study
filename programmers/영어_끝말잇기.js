function solution(n, words){
    let memory = []
    

    for(let i=0; i<words.length-1; i++){
        if(words[i].at(-1) !== words[i+1].at(0)) return [(i+1)%n+1,Math.floor((i+1)/n)+1]
        if(memory.includes(words[i+1]))/* i하면 안됨. i+1 해야 끝까지 닿음. words[0]은 어차피 빈 배열임*/ return [(i+1)%n+1,Math.floor((i+1)/n)+1]
        memory.push(words[i])
    }

return [0,0]
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5,	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2,	["hello", "one", "even", "never", "now", "world", "draw"]));