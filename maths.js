// step 10 sort array - should return a sorted numeric array, use nested loops//

function sortArray(array){
    for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
return array;
}

// step 11 divisibles array,  which return the sum of numbers by 5 in the array. use loop, the modulus opertator and variable to find sum//

function divisibles(arr){
    var sum=0;
    for (var q=0 ; q<arr.length;q++){
        if (arr[q]%5==0){
            sum=sum+arr[q];
        }
    }
    return sum;
}

//step 12 function called printArray() which logs into console the array elements. use loop to perform step.//

function printArray(arr){
    for (var q=0 ; q<arr.length;q++){

        console.log(arr[q]);
    }
}

// Step 13 Create an array of unordered numeric numbers and call the sortArray(array) and divisible(array) functions as suitable then log into the console the array and the sum. Finally, open the HTML file in the browser and open the console to view the results.//

var array= [4,3,55,5,0,1,-2]
var x =sortArray(array);
console.log("The sum is: "+divisibles(x));
printArray(x);



