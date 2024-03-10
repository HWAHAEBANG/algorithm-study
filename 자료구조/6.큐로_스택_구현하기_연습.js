/** 내 생각은 답안과 조금 다름. 
 * 왜냐하면 답안은 push를 함과 동시에 스와핑을 해주고 있음.
 * 근데 이 방법은 push만 하는 작업을 할 때에서 O(n)의 시간복잡도를 발생시킴.
 * pop을 할 생각도 없는데 굳이 스와핑 할 필요가 있을까?
 * */ 

import {Queue} from './2.큐_구현.js'

class StackWithTwoQueues{
    constructor(){
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(data){
        this.queue1.enqueue(data);
    }

    pop(){
        let target
        if (this.queue1.size() === 0) return "Underflow";
        while(this.queue1.size() !== 1){
            this.queue2.enqueue(this.queue1.dequeue())
        }
        target = this.queue1.dequeue();
        [this.queue1, this.queue2] = [this.queue2, this.queue1]
        return target
    }

    peek(){

    }

    isEmpty(){

    }

    size(){

    }

    printStack(){
        console.log('q1',this.queue1.printQueue());
        console.log('q2',this.queue2.printQueue());
    }
}

const stackWithTwoQueues = new StackWithTwoQueues()

console.log(stackWithTwoQueues.printStack());
stackWithTwoQueues.push(1)
console.log(stackWithTwoQueues.printStack());
stackWithTwoQueues.push(2)
console.log(stackWithTwoQueues.printStack());
stackWithTwoQueues.push(3)
console.log(stackWithTwoQueues.printStack());
stackWithTwoQueues.push(4)
console.log(stackWithTwoQueues.printStack());
stackWithTwoQueues.push(5)
console.log(stackWithTwoQueues.printStack());
console.log(stackWithTwoQueues.pop());
console.log(stackWithTwoQueues.printStack());
console.log(stackWithTwoQueues.pop());
console.log(stackWithTwoQueues.printStack());
console.log(stackWithTwoQueues.pop());
console.log(stackWithTwoQueues.printStack());
console.log(stackWithTwoQueues.pop());
console.log(stackWithTwoQueues.printStack());
console.log(stackWithTwoQueues.pop());
console.log(stackWithTwoQueues.printStack());
console.log(stackWithTwoQueues.pop());
console.log(stackWithTwoQueues.printStack());
