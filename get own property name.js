const obj = {
    a:'1',
    b:'2',
    c:'3',
    d:'4',
    e:'5',
}
const keys = Object.getOwnPropertyNames(obj)
const newKeys = keys.map((item)=>{
    return item
})
const newKeys1 = newKeys.map((item)=>{
    return item.split(item.length).splice(0,1)
})
console.log(newKeys1)