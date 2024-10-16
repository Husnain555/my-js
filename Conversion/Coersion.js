// What is Conversion
// when we conver manually types like string to number or number to string its called Conversion
// what is coersion
// when JS atomatically  Convert any type for us behind the scene is called coersion

// Number Conversion

let myBirthYear = '1998'
// console.log(myBirthYear + 27)
// its give us 199827

console.log(Number(myBirthYear) + 26)


// String Conversion?
let myAge = 26
let newAge = String(myAge)
console.log(typeof newAge)
console.log( newAge)
// type Coersion
let coersion = `i'm  ${myAge} Years old`
console.log(coersion)
console.log(typeof coersion)
// we see myAge atomatically converted from number to string this is called coersion
// here anothe example?
let newCoersion = 'my age is  ' + 23 + ' years old'
console.log(newCoersion)
// here  + oprator triger to convert 23 into a string
let otherCoersion = '12' - '34' - 45
console.log(otherCoersion)
// here we see - oprator convert strings to numbers
// they works opsite
console.log(typeof true)
