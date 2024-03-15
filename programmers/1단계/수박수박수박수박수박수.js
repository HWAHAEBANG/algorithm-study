// 내답다답비슷 내 답이 더 좋은 듯
function solution(n) {
    var answer = '';
    
    for(let i=1; i<=n; i++){
        answer += i%2 ? '수' : '박' 
    }
    
    return answer;
}