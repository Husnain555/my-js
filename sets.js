const array = [1,2,3,4,5,6,7,8,9,10];
const set = new Set(array);
console.log(set)
set.add({a:1,b:2})
console.log(set)
set.has(2)
console.log(set)
set.delete(2)
console.log(set)