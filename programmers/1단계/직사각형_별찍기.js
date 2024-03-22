// 방식 특이해서 답안 참고
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let row=0;row<b;row++){
        console.log('*'.repeat(a))
    }
    
});