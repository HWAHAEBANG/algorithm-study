// 다답
function solution(s){
    let mid = parseInt(s.length/2)

    return s.length % 2 ? s[mid] : s[mid-1] + s[mid]
}



// 내답 잘 동작하고, 좋지만 덜 간결
function solution(s) {
    let n = s.length
    
    if(n % 2) return s.slice(parseInt(n/2), parseInt(n/2)+1)
    else return s.slice(parseInt(n/2)-1, parseInt(n/2)+1)
}