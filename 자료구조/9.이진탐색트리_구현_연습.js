class BinaryTreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

        insert(value){
        const newNode = new BinaryTreeNode(value);
        if(!this.root){
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode){
        if(newNode.value < node.value){
            if(!node.left){
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if(!node.right){
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(value){
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value){
        if(!node) return false;
        if(node.value === value) return true;
        if(value < node.value){
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
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

// Usage example:
const tree = new BinaryTree();
 tree.insert(5);
for(let i=1; i<=7; i++){
    tree.insert(i);
}


// console.log(tree.search(6)); // Output: true
// console.log(tree.search(7)); // Output: false
console.log(tree.root);
// console.log(tree.preOrderTraversal(tree.root));
// console.log(tree.inOrderTraversal(tree.root));
// console.log(tree.postOrderTraversal(tree.root));