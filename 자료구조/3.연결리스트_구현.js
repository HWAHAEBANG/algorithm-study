// 연결 리스트의 노드 정의
class Node {
  constructor(data) {
    this.data = data; // 노드에 저장될 데이터
    this.next = null; // 다음 노드에 대한 참조
  }
}

// 연결 리스트 정의
class LinkedList {
  constructor() {
    this.head = null; // 연결 리스트의 첫 번째 노드에 대한 참조
    this.size = 0; // 연결 리스트의 크기
  }

  // 연결 리스트에 요소 추가
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 연결 리스트의 특정 위치에 요소 추가
  insertAt(data, index) {
    if (index < 0 || index > this.size) return false;
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
    return true;
  }

  // 연결 리스트의 특정 위치의 요소 삭제
  removeFrom(index) {
    if (index < 0 || index >= this.size) return false;
    let current = this.head;
    let previous = null;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // 연결 리스트에서 특정 요소의 인덱스 반환
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // 연결 리스트의 크기 반환
  getSize() {
    return this.size;
  }

  // 연결 리스트를 배열로 반환
  toArray() {
    let result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

// 연결 리스트 사용 예시
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);

console.log(linkedList.toArray()); // [10, 20, 30]

console.log(linkedList.getSize()); // 3

console.log(linkedList.indexOf(20)); // 1

linkedList.insertAt(15, 1);
console.log(linkedList.toArray()); // [10, 15, 20, 30]

linkedList.removeFrom(2);
console.log(linkedList.toArray()); // [10, 15, 30]
