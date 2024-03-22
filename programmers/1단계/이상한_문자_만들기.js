//개선 내답
// 테스트 4 〉	통과 (0.16ms, 33.5MB) // for문 한번만  씀으로써 시간 조금 단축
function solution(s){
    let idx = 0
    
    for(let i=0; i<s.length; i++){
        if(s[i] === ' ') idx = 0
        if(idx % 2 === 0){
            s[i] = s[i].toUpperCase()
        }
        else {
            s[i] = s[i].toUpperCase()
            
        }
        idx++
    }

    return s
}

// 내답. 다답도 그저그런듯..
//테스트 4 〉	통과 (0.27ms, 33.4MB)
function solution(s) {
    let tmp = s.split(' ')
    
    for(let i=0; i<tmp.length ;i++){
        let x =  tmp[i].split('') // spilit 때문에 참조의 의한 전달이 아니라 값이 전달되는 듯
        for(let j=0; j<x.length ;j++){
            if(j%2 === 0){
                x[j] = x[j].toUpperCase()
            } else {

                x[j] = x[j].toLowerCase()
            }
        }
        // console.log(tmp[i])// 실행해보면 아무것도 반영 안됐음을 알 수 있음.
        tmp[i] = x.join(''); // 배열을 다시 문자열로 결합해주는 과정이 꼭 필요.
    }
    
    return tmp.join(' ')
}