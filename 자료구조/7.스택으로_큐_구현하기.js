import { Stack } from './Stack';

export class QueueWithTwoStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // 큐에 요소 추가
  enqueue(element) {
    this.stack1.push(element);
  }

  // 큐에서 요소 제거하고 반환
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";

    // stack2가 비어있을 때만 stack1의 모든 요소를 stack2로 이동
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  // 큐의 맨 앞 요소 반환
  front() {
    if (this.isEmpty()) return "Queue is empty";

    // stack2가 비어있을 때만 stack1의 모든 요소를 stack2로 이동
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.peek();
  }

  // 큐가 비어있는지 여부 확인
  isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }

  // 큐의 크기 반환
  size() {
    return this.stack1.size() + this.stack2.size();
  }

  // 큐 내용을 문자열로 반환
  printQueue() {
    let str = "Front -> ";
    str += this.stack2.printStack() + this.stack1.printStack().split(" ").reverse().join(" ") + " <- Rear";
    return str;
  }
}
