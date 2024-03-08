// 해시 테이블 구현
class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
  }

  // 해시 함수
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  // 키-값 쌍 추가
  set(key, value) {
    const index = this.hash(key);
    for (let kvp of this.buckets[index]) {
      if (kvp[0] === key) {
        kvp[1] = value; // 이미 존재하는 키라면 값을 갱신
        return;
      }
    }
    this.buckets[index].push([key, value]);
  }

  // 키에 해당하는 값 반환
  get(key) {
    const index = this.hash(key);
    for (let kvp of this.buckets[index]) {
      if (kvp[0] === key) {
        return kvp[1];
      }
    }
    return null; // 키에 해당하는 값이 없는 경우
  }

  // 키-값 쌍 삭제
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  // 해시 테이블 내용 출력
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i].length > 0) {
        console.log(`Bucket ${i}:`);
        for (let kvp of this.buckets[i]) {
          console.log(`  ${kvp[0]}: ${kvp[1]}`);
        }
      }
    }
  }
}

// 해시 테이블 사용 예시
const ht = new HashTable(5);
ht.set("apple", 10);
ht.set("banana", 20);
ht.set("cherry", 30);
ht.display(); // 해시 테이블 내용 출력

console.log(ht.get("banana")); // 20
ht.remove("banana");
console.log(ht.get("banana")); // null
