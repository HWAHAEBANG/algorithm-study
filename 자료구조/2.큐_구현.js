export class Queue {
  constructor() {
    this.items = [];
  }

  // 큐에 요소 추가
  enqueue(element) {
    this.items.push(element);
  }

  // 큐의 첫 번째 요소 제거하고 반환
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  // 큐의 첫 번째 요소 반환
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // 큐가 비어있는지 여부 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐의 크기 반환
  size() {
    return this.items.length;
  }

  // 큐 내용을 문자열로 반환
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// // 큐 사용 예시
// const queue = new Queue();
// console.log(queue.isEmpty()); // true

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.printQueue()); // 10 20 30

// console.log(queue.front()); // 10

// console.log(queue.dequeue()); // 10
// console.log(queue.printQueue()); // 20 30
