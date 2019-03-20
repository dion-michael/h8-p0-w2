/*
	minMax
	
	tentukan minimum dan maximum value dari sebuah Array 
	
	contoh : 
	input : [1,2,3,4,5,6,7,8,9]
	
	output : 
	min : 1
	max : 9
	
	dilarang : 
	menggunakan build in function array maupun regex
*/

function minMax(arr) {
    // your code is here 
    var max = 0
    var min = arr[0]
    for(var x=0; x<arr.length; x++){
        if(max<arr[x]){
            max = arr[x]
        }
        if(min>arr[x]){
            min = arr[x]
        }
    }
    return 'max: ' + max + '\nmin: ' + min
   }
   
   console.log(minMax([4,6,16,7,8,1,5]))
   console.log(minMax([0,0,0,0]))
   /*
    min : 1
    max : 8
   */


function segitigaSiku(num){
    var finalResult = '';
    for(var x=1; x<=num; x++){
        var result = '';
        var space = '';
        for(var y=num; y>x; y--){
            result = result + ' ';
        }
        for(var z=0; z<x; z++){
            result = result + '*';
        }
        if(x === num){
            finalResult = finalResult + result
        }
        else(
            finalResult = finalResult + result + '\n'
        )
    }
    return finalResult;
}
console.log(segitigaSiku(10));

function trapesium(num){

    for(var y=num; y<num*2; y++){
        var result = '';
        for(var x=0; x<y; x++){
            result = result + '*'
        }
        console.log(result)
    }
}
trapesium(10);
   
//    Collapse
   
   
   
//    Message Input
   
   
//    Message Aries Dimas Yudhistira