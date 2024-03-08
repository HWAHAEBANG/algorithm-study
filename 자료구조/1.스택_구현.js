export class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 요소 추가
  push(element) {
    this.items.push(element);
  }

  // 스택의 맨 위에서 요소 제거하고 반환
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  // 스택의 맨 위 요소 반환
  peek() {
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 여부 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 크기 반환
  size() {
    return this.items.length;
  }

  // 스택 내용을 문자열로 반환
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// 스택 사용 예시
// const stack = new Stack();
// console.log(stack.isEmpty()); // true

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.printStack()); // 10 20 30

// console.log(stack.peek()); // 30

// console.log(stack.pop()); // 30
// console.log(stack.printStack()); // 10 20
