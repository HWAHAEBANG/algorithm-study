class HashTable {
    constructor(size){
        this.size = size
        this.buckets = []
        for(let i=0; i<size; i++){
            this.buckets[i] = [];
        } 
    }
    hash(key){
        let hashValue = 0;
        for(let i=0; i<key.length; i++){ // 
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        for(let kvp of this.buckets[index]){
            if(kvp[0] === key){
                kvp[1] = value;
                return;
            }
        }
        this.buckets[index].push([key, value])
    }

    get(key){
        let index = this.hash(key);
        for(let kvp of this.buckets[index]){
            if(kvp[0] === key){
                return kvp[1];
            }
        }
        return null;
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.buckets[index]
        for(let i=0; i<bucket.length; i++){
            if(bucket[i][0] === key){
                bucket.splice(i,1);
                return;
            }
        }
    }

    display(){
        for(let i=0; i<this.size; i++){
            if(this.buckets[i].length > 0 ){
                for(let [key, value] of this.buckets[i]){
                console.log(`${key}: ${value}`);
                }
            }
        }
    }
}


// class HashTable {
//     constructor(size){
//         this.size = size
//         this.buckets = []
//         for(let i=0; i<size; i++){
//             this.buckets[i] = []
//         }
//     }

//     hash(key){
//         let hashValue = 0;
//         for(let i=0; i<key.length; i++){
//             hashValue += key.charCodeAt(i);
//         }
//         return hashValue % this.size;
//     }

//     set(key, value){
//         const index = this.hash(key)
//         for(let kvp of this.buckets[index]){
//             if(kvp[0] === key){
//                 kvp[1] = value
//                 return;
//             }
//         }
//         this.buckets[index].push([key,value]);
//     }

//     get(key){
//         const index = this.hash(key);
//         for(let kvp of this.buckets[index]){
//             if(kvp[0] === key){
//                 return kvp[1];
//             }
//         }
//         return null;
//     }

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.buckets[index]
//         for(let i=0; i<bucket.length; i++){
//             if(bucket[i][0] === key){
//                 bucket.splice(i, 1);
//                 return;
//             }
//         }
//     }

//     display(){
//         for(let i=0; i<this.size; i++){
//             console.log(`bucket: ${i}`);
//             for(let kvp of this.buckets[i]){
//                 console.log(`${kvp[0]}:${kvp[1]}`);
//             }
//         }

//     }
// }


const ht = new HashTable(5);

console.log(ht.display());
ht.set('apple', 10);
console.log(ht.display());
ht.set('banana', 20);
console.log(ht.display());
ht.set('cherry', 30);
console.log(ht.display());

console.log(ht.get('apple'));
console.log(ht.get('banana'));
console.log(ht.get('orange'));

ht.remove('banana')
console.log(ht.display());