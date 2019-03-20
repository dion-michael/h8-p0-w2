function nameTriangle(input){
    for(var row=1; row<=input.length; row++){
        var result = '';
        for(var col=0; col<row; col++){
            result = result + input[col];
        }
        console.log(result);
    }
    //reverse triangle
    for(var row=input.length-1; row>=0; row--){
        var print = input.slice(0, row);
        console.log(print);
    }
}
nameTriangle('dion agoes');