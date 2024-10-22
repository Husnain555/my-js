function factory (radius) {
    return {
        radius,

    }

}
circle1 = factory(55);
circle2 = factory(45);
circle3 = factory(35);
circle4 = factory(25);
circle5 = factory(15);
console.log(circle1,circle2,circle3,circle4,circle5);


// in factory function we can create function to re use like we do in React in react we create a component to and re use it we can also dpo this with
// help of factory functions
