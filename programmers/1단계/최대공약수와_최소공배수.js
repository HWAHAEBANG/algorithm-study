function solution(n, m) {
    
    function gcd(n,m){
    let remain = n % m
    if(!remain) return m
    return gcd(m, remain)
}
    
    function lcm(n,m){
    return n*m/gcd(n,m)
}
    
    return [gcd(n,m),lcm(n,m)];
}