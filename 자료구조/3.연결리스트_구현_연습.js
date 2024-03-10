class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    add(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode
        }
        this.size++
    }

    insertAt(value, index){
        if(index < 0 || index > this.size) throw new Error('Wrong index')
        let newNode = new Node(value);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let previous = null
            let current = this.head
            let count = 0;
            // 능지 구간 **********************************
            while(count < index){
                previous = current
                current = current.next
                // previous.next = current.next 이딴 거 필요없음 주의
                count++;
            }
            newNode.next = current;
            previous.next = newNode;
            // *******************************************
        }
        this.size++;
        return true;
    }

    removeFrom(index){
        if (index < 0 || index >= this.size) return false;
        let previous = null;
        let current = this.head;
        let count = 0;
        if(index === 0){
            this.head = this.head.next;
        } else {
            while(count < index){
                previous = current;
                current = current.next;
                count++
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    indexOf(value){
        let current = this.head;
        let count = 0;
        while(value !== current.value){
            if(this.getSize() <= count) return -1
            current = current.next
            count++
        }
        return count;
    }
    getSize(){
        return this.size;
    }

    toArray(){
        let current = this.head;
        let arr = [];
        while(current !== null){
            arr.push(current.value);
            current = current.next;
        } 
        return arr;
    }
}



// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     add(data){
//         let newNode = new Node(data);
//         if(this.head === null){
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while(current.next !== null){
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         this.size++
//     }

//     insertAt(data, index){
//         if(index < 0 || index > this.size) throw new Error('유요하지 않은 인덱스')
//         let newNode = new Node(data);
//         if (index === 0){
//             newNode.next = this.head;
//             this.head = newNode;
//         } else { // 제일 헷갈리는 구간
//             let current = this.head;
//             let previous = null;
//             let count = 0;
//             while(count < index){
//                 previous = current;
//                 current = current.next;
//                 count++;
//             }
//             newNode.next = current
//             previous.next = newNode;
//         }
//         this.size++;
//         return true; // true 해주는 게 맞나?
//     }

//     removeFrom(index){
//         if(index < 0 || index > this.size) throw new Error('유요하지 않은 인덱스')
//         let current = this.head;
//         let previous = null;
//         let count = 0;
//         if(index === 0){
//             this.head = this.head.next
//         } else {
//             while(count < index){
//                 previous = current; // previous.next = current; 아님. previous 아직 null임
//                 current = current.next;
//                 count++;
//             }
//             previous.next = current.next;
//         }
//         this.size--
//         return current.data;
//     }

//     indexOf(data){
//         let current = this.head;
//         let index = 0;
//         // 난 이렇게 짰는데 혹시 될지?
//         while( current.data !== data ){
//             if(index >= this.size) return -1;
//             current = current.next;
//             index++
//         }
//         return index
//     }

//     getSize(){
//         return this.size;
//     }

//     toArray(){
//         let result = []
//         let current = this.head;
//         while(current !== null){
//             result.push(current.data);
//             current = current.next;
//         }
//         return result;
//     }
// }


const linkedList = new LinkedList();

console.log(linkedList.toArray());
console.log(linkedList.add(1));
console.log(linkedList.add(2));
console.log(linkedList.insertAt(3,1));
console.log(linkedList.toArray());
console.log(linkedList.indexOf(2));
console.log(linkedList.getSize());
console.log(linkedList.removeFrom(1));
console.log(linkedList.toArray());
console.log(linkedList.getSize());
