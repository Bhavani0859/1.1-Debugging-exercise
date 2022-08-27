/* code:
let data = {
};
data.displayInfo(); */

/* error: type error 
    because displayInfo() function is undefined ,trying to accessing the object of undefined will returns type error
    */

// if we replace displayInfo() with display() then we will not get error that is
// one way of correcting the code
let data = {
};
data.displayInfo; 
 // the above code will not return anything because it was undefined

 // another way of correcting code is to define the function displayInfo() and accessing it
 //note: here i am changing the value of data variable
 data ={
  displayInfo(){
    let a=10
    console.log(a)
  }
};
data.displayInfo();



