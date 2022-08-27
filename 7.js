//code
/*function loopToFive(){
    for(let i=0, i < 5, i++){
        console.log(i);
    }
}*/

// here we will get syntax error because we were placed ',' inplace of ';'

function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}
//even though we rectified the error the function will not be executed until we call the function
loopToFive()
