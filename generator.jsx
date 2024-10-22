function *Generator() {
    console.log('Generator1 is working!');
    yield  'yield 1 is working'
    console.log('Generator2 is working!');
    yield 'yield 2 is working'

}
const g = Generator();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
