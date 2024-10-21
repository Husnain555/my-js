// console.log(0 | 2)
// console.log(2 & 1)
//
// const read = 1
// const write = 2
//
// let myPremission = 0
// myPremission = myPremission | write
// console.log(myPremission,write,read)
// let message = ( myPremission & read ) ? 'yes' : 'no'
// console.log(message)


let login = 1
let logout = 2
let UserToken = 4
let myID = 0
myID = myID | logout | login | UserToken
let myProfile = (myID & login & UserToken ) ? 'Login To profile' : "Return to login page"
console.log(myProfile)


