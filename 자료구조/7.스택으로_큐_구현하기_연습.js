import {Stack} from './1.스택_구현.js'


class QueueWithTwoStacks {
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(data){
        this.stack1.push(data);
    }

    dequeue(){
        if(this.stack2.size() === 0){
            while(this.stack1.size() !== 0){
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2.pop();
        } else {
            return this.stack2.pop();
        }
    }

    printStack(){
        console.log('s1', this.stack1);
        console.log('s2', this.stack2);
    }
}

const queueWithTwoStacks = new QueueWithTwoStacks()

queueWithTwoStacks.enqueue(1)
queueWithTwoStacks.printStack();
queueWithTwoStacks.enqueue(2)
queueWithTwoStacks.printStack();
queueWithTwoStacks.enqueue(3)
queueWithTwoStacks.printStack();
queueWithTwoStacks.enqueue(4)
queueWithTwoStacks.printStack();
queueWithTwoStacks.enqueue(5)
queueWithTwoStacks.printStack();
queueWithTwoStacks.dequeue();
queueWithTwoStacks.printStack();
queueWithTwoStacks.dequeue();
queueWithTwoStacks.printStack();
queueWithTwoStacks.dequeue();
