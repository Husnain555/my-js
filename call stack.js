const n = 2
function add (num){
    const ans =  num * num
    return ans
}
const one = add(n)
const two = add(5)
console.log(one,two)
// so what happend here in exicustion contest when ever a code invoke a excusition contest created in exicustio context there two tabe create
// a first was "variable Enviroment or Memory component" and second was "code component " in variable enviroment add the variable declared with the value of
// "undefoine " except functions
// for example in memory component variables declared like this
// n = undifine
// add {"whole function here"}
// one = undifine
// two = undifine
// after this the origninal valus added except function
// because where new function is exicute there new execution contest created