//code

/*function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers();*/

// asked to return [2,4,6,8] from the code

/*firstly removing the syntax errors 
1) removing ';' after increment(i++) in  (line 4)
2) replacing '=' with '==' in if condition (line 5)
3) removing ';' after if condition (line 5)
after coming to logical mistakes
1) the condition given in for loop will not check with the last element of the numbers list so we want to give as either 
   i< numbers.length or i<= numbers.length-1 (line 4)
2) in if condition we want to check with the elements of the list "numbers" so we want to replace "numbers" with "numbers[i]"
3) want to replace 'i' with 'numbers[i]' in (line 6) 
4) return evenNumbers want to be placed outside the for block otherwise the function will be terminated after a single interation*/


function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    //console.log(numbers.length)
    for(let i=0; i<numbers.length; i++){
        //console.log(numbers[i])
        if(numbers[i] % 2 == 0) {
            //console.log(numbers[i])
            evenNumbers.push(numbers[i]);
        }  
    } return evenNumbers;
}

console.log(displayEvenNumbers());