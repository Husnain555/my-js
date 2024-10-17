const array = [1, 2, 3, 4, 5];
const newArray = Math.max.apply(null,array);
// console.log(newArray);

const name1 = {
    fName : 'Husnain',
    lName: 'Babar',
}
const obj = {
    fullName:function (){
        return this.fName + '  ' + this.lName
    }
}
console.log(obj.fullName.call(name1));

