const obj = {
    fullName : function (){
        return this.fname + ' ' + this.laName
    }
}
const name ={
    fname: 'husnain',
    laName: 'Babar',
}
const newName =obj.fullName.call(name);
console.log(newName)
// call method store value in new veriable but apply only store for once