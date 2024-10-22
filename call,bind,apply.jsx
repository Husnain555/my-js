const obj = {
    name:'husnain',
    lname:'babar',
    getName :function name1(){
        return obj.name;
    }
}
const obj2 = {
    location:'pakistan'
}
const newObject = obj.getName.call(obj2)
console.log(newObject.name)
// const array = [1, 2,16, 3, 4, 5,6,7,8,9,10,11,12,13,14,15];
// const array1 = [17,18,19,20]
// const newArray = Math.max.apply( 0,array);
// console.log(newArray);

