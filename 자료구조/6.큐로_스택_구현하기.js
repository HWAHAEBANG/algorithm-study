import { Queue } from './2.큐_구현';

class StackWithTwoQueues {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  // 스택에 요소 추가
  push(element) {
    // queue1에 요소를 추가하고 queue2에 모든 요소를 옮긴 뒤, queue1과 queue2를 교환
    this.queue1.enqueue(element);
    while (!this.queue2.isEmpty()) {
      this.queue1.enqueue(this.queue2.dequeue());
    }
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  // 스택의 맨 위 요소 제거하고 반환
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.queue2.dequeue();
  }

  // 스택의 맨 위 요소 반환
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.queue2.front();
  }

  // 스택이 비어있는지 여부 확인
  isEmpty() {
    return this.queue2.isEmpty();
  }

  // 스택의 크기 반환
  size() {
    return this.queue2.size();
  }

  // 스택 내용을 문자열로 반환
  printStack() {
    return this.queue2.printQueue();
  }
}