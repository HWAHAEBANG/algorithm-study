class Stack{
  constructor(){
    this.items = [];
  }

  push(data){
    if(this.size() >= Infinity) throw new Error('Stack Overflow');
    this.items.push(data);
  }

  pop(){
    if(this.isEmpty()) throw new Error ('Underflow');
    return this.items.pop();
  }

  peek(){
    if(this.isEmpty()) throw new Error ('Underflow'); // 하는게 맞을까?
    return this.items[this.items.length-1];
  }

  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  printStack(){
    let str = '';
    for(let x of this.items){
      str += x + ' ';
    }
    return str;
  }
}



// export class Stack {
//     constructor(){
//         this.items = []
//     }

//   // 스택에 요소 추가
//     push(element){
//         this.items.push(element);
//     }

//   // 스택의 맨 위에서 요소 제거하고 반환
//     pop(){
//         if(this.isEmpty()) return 'Under flow'
//         return this.items.pop();
//     }

//   // 스택의 맨 위 요소 반환
//     peek(){
//         return this.items[this.items.length-1];
//     }

//   // 스택이 비어있는지 여부 확인
//     isEmpty(){
//         return this.items.length === 0;
//     }

//   // 스택의 크기 반환
//     size(){
//         return this.items.length;
//     }

//   // 스택 내용을 문자열로 반환
//     printStack(){
//         let str = ''
//         for(let x of this.items){
//             str += x + ' ';
//         }
//         return str;
//     }
// }

// 스택 사용
let stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.size());
stack.push(10);
console.log(stack.isEmpty());
console.log(stack.size());
stack.push(20);
stack.push(30);
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.printStack());
console.log(stack.pop());
// console.log(stack.printStack());
// console.log(stack.isEmpty());
// console.log(stack.size());