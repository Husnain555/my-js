let fuel = 1000
let distance = 0
while (fuel > 0){
    distance++
    fuel = fuel -1
    if (distance === 500){
        break;
    }else if (distance > 600){
        continue;
    }
}
console.log(distance)