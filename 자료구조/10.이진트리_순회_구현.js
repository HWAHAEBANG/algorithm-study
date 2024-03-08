// 이진 트리 노드 클래스 정의
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 이진 트리 클래스 정의
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입 메서드
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 노드 삽입 보조 메서드
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 트리 순회 메서드: 전위 순회 (루트-왼쪽-오른쪽)
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // 트리 순회 메서드: 중위 순회 (왼쪽-루트-오른쪽)
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // 트리 순회 메서드: 후위 순회 (왼쪽-오른쪽-루트)
  postOrderTraversal(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
}

// 이진 트리 인스턴스 생성
const binaryTree = new BinaryTree();
