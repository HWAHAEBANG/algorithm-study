class TreeNode {
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addChild(value){
        const newNode = new TreeNode(value);
        this.children.push(newNode);
    }

    removeChild(value){
        this.children = this.children.filter(child => child.value !== value)
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    addRoot(value){
        this.root = new TreeNode(value);
    }

    DFS(callback){
        function traverse(node){
            callback(node);
            node.children.forEach(child => {
                traverse(child);
            })
        }
        traverse(this.root);
    }

    BFS(callback){
        const queue = [this.root];
        while(queue.length > 0){
            const node = queue.shift();
            callback(node);
            node.children.forEach(child => {
                queue.push(child);
            })
        }
    }
}

const tree = new Tree();

// console.log(tree);
// tree.addRoot('내가 루트')
// console.log(tree);

// for(let i=0; i<5; i++){
//     tree.root.addChild(i)
// }
// console.log(tree);

// tree.root.children[0].addChild(5)
// tree.root.children[0].addChild(6)
// tree.root.children[1].addChild(7)

// console.log(tree.root.children);
// console.log(tree.root.children[0].children);


// console.log(tree.DFS(node => console.log(node.value)));
// console.log(tree.DFS(node => console.log(node.value)));

tree.addRoot('A');
tree.root.addChild('B');
tree.root.addChild('C');
tree.root.children[0].addChild('D');
tree.root.children[0].addChild('E');
tree.root.children[1].addChild('F');

console.log('Depth First Traversal:');
tree.DFS(node => console.log(node.value)); // Output: A, B, D, E, C, F

console.log('Breadth First Traversal:');
tree.BFS(node => console.log(node.value)); // Output: A, B, C, D, E, F
