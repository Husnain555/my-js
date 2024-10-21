let a = 10
let b = a
a = 20
// here I change the value without any reference
console.log(a, b)
 // this called primitive type
// reference type
const new1 = {
    name:'husnain',
    lastN:'babar'
}
 // now if I need to change the value of  name I need a reference means
new1.lastN = 'babar1'
console.log(new1.lastN)