function solution(price, money, count) {
        let acc = 0
        for(let i=1; i <= count; i++) acc += price*i
    
    return acc > money ? acc - money : 0 
}

function solution(price, money, count) {
    let total = (1 + count) * count / 2 * price
    return total - money > 0 ? total - money : 0;
}
