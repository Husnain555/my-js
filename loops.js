for (let i = 0 ; i <= 10 ;i++){
    console.log(`pushups` ,i)
}


const number = [1, 2, 3, 4, 5];
const newNumber = number.map((item)=>{
    return {
        number:item
    }
})
console.log(newNumber)
