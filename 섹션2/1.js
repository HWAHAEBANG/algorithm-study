function myAnswer(n, ...rest){
                const answer = rest.filter((i) => (i >= n))
                return answer;
            }

console.log((myAnswer(6,7,3,9,5,6,12)));



