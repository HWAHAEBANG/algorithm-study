class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(data){
        this.items.push(data);
    }
    
    dequeue(){
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front(){
        if (this.isEmpty()) return "Underflow";
        return this.items[0];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.items.length;
    }

    printQueue(){
        let str = '';
        for(let x of this.items){
            str += x + ' ';
        }
        return str; 
    }
}


// export class Queue {
//     constructor(){
//         this.items = [];
//     }

//     enqueue(element){
//         this.items.push(element);
//     }

//     dequeue(){
//         if(this.isEmpty()) return 'Underflow'
//         return this.items.shift();
//     }

//     front(){
//         if(this.isEmpty()) return 'No elements in Queue'
//         return this.items[0];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     size(){
//         return this.items.length;
//     }

//     printQueue(){
//         let str = ''
//         for(let x of this.items){
//             str += x + ' ';
//         }
//         return str;
//     }
// }

// 큐 사용
let queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.size());
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.printQueue());
console.log(queue.dequeue());
queue.enqueue(30);
console.log(queue.printQueue());
console.log(queue.front());
