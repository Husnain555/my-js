const target = {
    a:1,
    b:2,
    c:3
}
const provider ={
    b:1,
    d:5,
    e:6
}
const output = Object.assign(target, provider)
console.log(output)