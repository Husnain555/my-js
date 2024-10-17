const array = ['husnain','babar','aliza','maida','awais','zaman']
const newArray = array.filter((item)=>{
    return item.indexOf('husnain')

})
// console.log(newArray)
// console.log(array)
const output = array.filter((item)=>{
    return item !== 'husnain'

})
// console.log(output)
const newArray1 = [1,2,3,4,5,6,7,8,9,10]
const output1 = newArray1.filter((item)=>{
    if (item % 2){
        return true
    }

}).map((x)=> x * 2).sort((a,b)=> a+b)

console.log(output1)
