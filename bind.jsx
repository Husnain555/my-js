const obj ={
    fullName : function (){
        return this.firstName + " " + this.lastName
    }
}
const name = {
    firstName: 'Husnain',
    lastName: 'Babar',
}
const newName = obj.fullName.bind(name);
const output =newName();
console.log(output)
const output2 =output.split(0,1).map((item)=>{
    return item
})
console.log(output2)