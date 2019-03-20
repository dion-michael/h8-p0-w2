
function printAsterisk2(input){
    if(input<3){
        console.log('input minimum 3')
    }
    //checks if input is odd / even
    else if(input%2===0){
        //print triangle
        for(var x=1; x<=input; x++){
            var row = '';
            //to make sure the number of * printed is odd
            if(x%2 === 0){
                //add space before print *
                var space = (input - x)/2;
                //print space 'space' times
                for(var i=0; i<space; i++){
                    row = row + ' ';
                }
                //print * 'x' times
                for(var j=0; j<x; j++){
                    row = row + '*' ;
                }
                //log every row for 'x' times
                console.log(row);
            }
        }
        //print reverse triangle
        for(var x=input; x>=0; x--){
            var row = '';
            //to make sure the number of * printed is odd
            // && x<input makes sure the 'input' number of * is not printed again
            if(x%2 === 0 && x<input){
                //add space before print *
                var space = (input - x)/2;
                //print space 'space' times
                for(var i=0; i<space; i++){
                    row = row + ' ';
                }
                //print * 'x' times
                for(var j=0; j<x; j++){
                    row = row + '*' ;
                }
                //log every row for 'x' times
                console.log(row);
            }
        }
    }
    else{
        for(var x=1; x<=input; x++){
            var row = '';
            if(x%2 !== 0){
                var space = (input - x+1)/2;
                for(var i=0; i<space; i++){
                    row = row + ' ';
                }
                for(var y=0; y<x; y++){
                    row = row + '*' 
                }
                console.log(row);
            }
        }
        //print reverse triangle
        for(var x=input; x>=1; x--){
            var row = '';
            //to make sure the number of * printed is odd
            // && x<input makes sure the 'input' number of * is not printed again
            if(x%2 !== 0 && x<input){
                //add space before print *
                var space = (input - x+1)/2;
                //print space 'space' times
                for(var i=0; i<space; i++){
                    row = row + ' ';
                }
                //print * 'x' times
                for(var j=0; j<x; j++){
                    row = row + '*' ;
                }
                //log every row for 'x' times
                console.log(row);
            }
        }
    }  
}
for(var x=3; x<20; x++){
    printAsterisk2(x);
}

//     *
//    ***
//   *****
//  *******
// *********