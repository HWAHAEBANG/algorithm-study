class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BinarySearchTreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
    }
}

// // Usage example:
// const bst = new BinarySearchTree();
// bst.insert(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(6);
// bst.insert(14);

// console.log(bst.search(6)); // Output: true
// console.log(bst.search(7)); // Output: false

const tree = new BinarySearchTree();
 tree.insert(5);
for(let i=1; i<=7; i++){
    tree.insert(i);
}

console.log(tree.root);