const x = 12
// function add (){
//     console.log('Hello Husnain')
// }
// in this we see x = 12 and a function declaration if we  console it gives us values if we console before declaration
// its give us undefined
// in simple terms undefined and not define was defaults like if you declared a value and trying to access value before initializing its give us
// undefined and if we do not declare a va;lue and try to access its give us not define
// but in terms of pure function we can access function before initializing like


add1()
function add1(){
    console.log('Hello Husnain')
}
// but that's goes when it's a pure function if we are using arrow function its gives us not define error because arrow function basic worlds as a variable
// because we store arrow function in a variable
const arrow =()=>{
    console.log('Hello Husnain12')
}
// and there's another method of declaring a function like
const add2 = function (){
    console.log('Hello Husnain1233')
}
// if we try to access this before initializing we get error not define bcoz its also store in a variable