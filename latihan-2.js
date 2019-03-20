// //CONTOH CONCAT
// var arr1 = ['dion', 'michael', 'salvatore'];
// var arr2 = [10, 21, 11, 18];
// var arr3 = ['ariesto', 'andrew', 'agoes'];
// var copy = arr1.concat(arr2);
// //console.log(arr1.concat(arr2[1], arr3[2], arr3[0]));

// //COPY WITHIN
// //console.log(arr1.copyWithin(1,0,1));

// //ENTRIES()
// var entri = arr1.entries();
// //console.log(entri);

// //filter()
// arr2.filter(checkAdult);
// function checkAdult(age){
    
// }

// var input = 10;
// for(var row=0; row<input; row++){
//     var result = '';
//     if(row === 0 || row === input-1){
//         for(var col=0; col<input; col++){
//             result = result + '*';
//         }
//     }
//     else{
//         result = result + '*';
//         for(var x=1; x<=input-2; x++){
//             result = result + ' ';
//         }
//         result = result + '*';
//     }
//     console.log(result);
// }
function primeNumberCruncher(input){
    var primeArray = [];
    for(var i=1; i<=input; i++){
        var counter = 0;
        if(i === 1){
            primeArray.push(i);
        }
        else{
            for(var x=1; x<=i; x++){
                if(i % x === 0){
                    counter++;
                }   
            }
            if(counter === 2){
                primeArray.push(i);
            }
        }
    }
    var sum = 0;
    for(var x=0; x<primeArray.length; x++){
        sum = sum + primeArray[x];
    }
    var avg = sum/primeArray.length;
    var result = [];
    for(var x=0; x<primeArray.length; x++){
        if(primeArray[x] > avg){
            result.push(primeArray[x]);
        }
    }
    return result;
}
console.log(primeNumberCruncher(123));