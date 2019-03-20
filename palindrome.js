function isPalindrome(input){
    var reverseString = reverse(input);
    if(input === reverseString){
        return true;
    }
    else{
        return false;
    }
}

function reverse(input){
    var reverse = '';
    for(var x=input.length-1; x>=0; x--){
        reverse = reverse + input[x];
    }
    return reverse;
}

var input = ['wow', 'mereka', 'janji', 'bertemu', 'di', 'makam'];
// for(var x=0; x<input.length; x++){
//     if(isPalindrome(input[x])){
//         input.splice(x, 1);
//     }
// }
var result = [];
input.forEach(function(word){
    if(!isPalindrome(word)){
        result.push(word);
    }
})
console.log(result);