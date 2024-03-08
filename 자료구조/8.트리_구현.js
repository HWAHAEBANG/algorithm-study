class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const newNode = new TreeNode(value);
        this.children.push(newNode);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addRoot(value) {
        this.root = new TreeNode(value);
    }

    traverseDF(callback) {
        function traverse(node) {
            callback(node);
            node.children.forEach(child => {
                traverse(child);
            });
        }
        traverse(this.root);
    }

    traverseBF(callback) {
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node);
            node.children.forEach(child => {
                queue.push(child);
            });
        }
    }
}

// Usage example:
const tree = new Tree();
tree.addRoot('A');
tree.root.addChild('B');
tree.root.addChild('C');
tree.root.children[0].addChild('D');
tree.root.children[0].addChild('E');
tree.root.children[1].addChild('F');

console.log('Depth First Traversal:');
tree.traverseDF(node => console.log(node.value)); // Output: A, B, D, E, C, F

console.log('Breadth First Traversal:');
tree.traverseBF(node => console.log(node.value)); // Output: A, B, C, D, E, F
