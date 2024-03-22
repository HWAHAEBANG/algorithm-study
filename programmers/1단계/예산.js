// 다답 메서드 활용.. 허허...
function solution(d, budget) {
    return d.sort((a,b) => a-b).reduce((count, price) => {
        return count + Number((budget -= price) >= 0);
    },0)
}


//  내답 충분히 유효
function solution(d, budget) {
    d.sort((a,b) => a - b)
    let cnt = 0
    let sum = 0
    
    for(let x of d){
        if(sum + x > budget) break;
        else {
            cnt++
            sum += x
        }
    }
    
    return cnt
}