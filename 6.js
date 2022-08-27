//code

/*function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}*/

// we will get error because we are using assignment operator '=' in place of comparision operator '==' 
function addIfEven(num){
    if(num % 2 == 0){
        return num + 5;
    }
    return num;
};
//even though we rectified the error the block (i.e addIfEven function will not be executed) because we were not calling the function
a=addIfEven(5)
console.log(a)