const person = {
    name:'husnain',
    lname:'babar',
    get:function(){
        console.log(`my name is ${this.name} and my city is ${this.city}`);

    }


}

const me = Object.create(person);
me.city='Lahore'
me.get();
