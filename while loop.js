let rep = 1
while (rep <= 15) {
    console.log('Push ups ' + rep)
    rep ++
}

// let array = [1, 2, 3, 4, 5, 6];
// while (array[5].length <= 4) {
//     console.log(`length = ${array}`);
//     array ++
// }

// stop loop when get 6
let dice = Math.trunc( Math.random() * 6 ) + 1
while (dice === 6 ){
    console.log(`i get 6 in dice  ${dice}` )
    dice ++
}
