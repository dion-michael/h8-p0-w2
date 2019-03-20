
// ==================== CONVERT TIME ======================

var result = '';
var loop = 2;
function timeConversion(num){
    if(!loop){
    }
    else{
        if(loop === 2){
            var jam = Math.floor((num/60)/60);
            if(!jam){

            }
            else{
                result = result + jam.toString() + ' Jam, ';
                num = num - (3600*jam);
            }
            loop--;
        }
        else if(loop === 1){
            var menit = Math.floor((num/60)%60);
            if(!menit){
                result = result + num.toString() + ' Detik';
            }
            else{
                num = num - (60*menit);
                result = result + menit.toString() + ' Menit, ' + num.toString() + ' Detik';
            }
            loop--;
        }
        return timeConversion(num);
    }
    return result;
}
console.log(timeConversion(474534));

// ==================== FACTORIAL ======================

// var result;
// function factorial(input){
//     if(input === 1){
//         return 1;
//     }
//     console.log(input);
//     return input * factorial(input - 1);
// }
// console.log(factorial(5))

// ==================== REVERSE STRING ======================

// function reverse(name, length){
//     if(length === 0){
//         return name[length];
//     }
//     return name[length] + reverse(name, length-1);
// }
// var input = 'dion michael salvatore';
// var length = input.length-1;
// console.log(reverse(input, length));

function reverse(inputString){
    if(inputString === ''){
        return '';
    }
    return reverse(inputString.substr(1)) + inputString.charAt(0);
}
console.log(reverse('dion michael'))

// ==================== SIMPLE SUM ARRAY ======================

// //using recursion
// function usingRecursive(arr, length){
//     if(length === 0){
//         return arr[length];
//     }
//     return arr[length] + usingRecursive(arr,length-1);
// }
// console.log(usingRecursive(input, input.length-1) + ' - usingrecursive');