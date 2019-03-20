function dashWord(inputString, dash){
    //return inputString.slice(0, dash) + '-' + inputString.slice(dash, dash*2) + '-'
    var result = ''
    for(var x=0; x<inputString.length;){
        var stringPart = inputString.slice(x, dash+x);
        if(stringPart.length<dash){
            result = result + stringPart;
            x = x + dash;
        }
        else{
            result = result + stringPart + '-';
            x = x + dash;
        }
    }
    return result;
}
console.log(dashWord('classicFox', 3))
console.log('classic fox'.slice(3,6));