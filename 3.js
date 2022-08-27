//code:  
/*let data = {};
data.displayInfo.foo = "bar";*/

/*error: type error
      here we are trying to assign the value to the property of undefined which leads to a type error*/

//to avoid the error we want to add the displayInfo to data object ,and foo variable to displayInfo. then we can access them without getting error
let data ={
    displayInfo : {
        foo: "a"
    }
};
data.displayInfo.foo = "bar";
console.log(data.displayInfo.foo)
    