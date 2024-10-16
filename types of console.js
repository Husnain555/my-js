console.assert(typeof console !== 'object');

// console.clear();
function hello(user){
    console.count(user);
}
hello(['husnain']);
hello('husnain');
hello('husnain');
console.count()
console.countReset()
let value = 4 + 9;
console.debug(value)
console.dir(value)
console.dirxml(value)
console.error('husnain')
console.info('husnain',value)
console.table(['a', 'b', 'c', 'd', 'e', 'f'])
// to show tubler data in table form
console.time('time');
console.warn('husnain')