//code

/*function data(){
    let thing = "foo";
}
data();
thing;*/

/* error: type error
    we are trying to access the variable thing at out of it's scope ,it leads to type error*/

//to avoid the error we want to access the variable with in it's scope
function data(){
    let thing = "foo";
    thing;
    //console.log(thing)
}
data();