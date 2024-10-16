const mySelf = {
    firstName:'Husnain',
    lastName:'Babar',
    age:25,
    knowDriving:true,
    cal:function (year){
        this.age = year - 1998
        return this.age

}

}
console.log(mySelf.cal(2020));
