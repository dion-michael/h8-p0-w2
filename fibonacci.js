
//==================== FIBONACCI ====================

function fibonacci (input){
    var arr = [0,1];
    while(arr[arr.length-1]+arr[arr.length-2] < input){
        var number = arr[arr.length-1] + arr[arr.length-2];
        arr.push(number);
    }
    return arr;
}
//console.log(fibonacci(1000));

//================ LARGEST IN AN ARRAY ===============

var arr = [23, 56, 102, 92, 1000];
var largest = 0;
for(var x=0; x<arr.length; x++){
    if(arr[x]>largest){
        largest=arr[x];
    }
}
//console.log(largest);

//============= SIMPLE SUM USING 3 METHOD ============

var input = [23,65,10,43,24];

//using for loop
function usingFor(arr){
    var sum = 0;
    for(x=0; x<arr.length; x++){
        sum = sum + arr[x];
    }
    return sum;
}
console.log(usingFor(input) + ' - usingFor');

//using while loop
function usingWhile(arr){
    var sum = 0;
    var x = 0;
    while(x<arr.length){
        sum = sum + arr[x];
        x++;
    }
    return sum;
}
console.log(usingWhile(input) + ' - usingWhile');

//using recursion
function usingRecursive(arr, length){
    if(length === 0){
        return arr[length];
    }
    return arr[length] + usingRecursive(arr,length-1);
}
console.log(usingRecursive(input, input.length-1) + ' - usingrecursive');
