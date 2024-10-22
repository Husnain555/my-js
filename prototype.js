let array = [1, 2, 3, 4, 5, 6, 7];


// when we get some build in methods in any object is known as prototype
// and when a object trying to get other object is called prototype inheritance


// dont do this because of optimization

const obj = {
    name:'Husnain',
    Lname:'babar'
}
const obj2 = {
    location:'Lahore',

}
obj2.__proto__ = obj
console.log(obj2.name)

// its print Husnain


// we __proto__ because js dev not want to other dev to use this because if we directly use this we get a huge optimizations issues