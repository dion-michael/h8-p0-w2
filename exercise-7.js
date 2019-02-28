
//=========================  1. MENYUSUN BARISAN BINTANG  ============================

console.log('1. MENYUSUN BARISAN BINTANG')
var rows1 = 5;
for(var x = 0; x<rows1; x++){
    console.log('*');
}

//=============== 2. MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING  =================

console.log('\n2. MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING')
var rows2 = 5;
for(var x=0; x<rows2; x++){
    var result = ''
    for(var y=0; y<rows2; y++){
        result = result + '*';
    }
    console.log(result);
}

//=========== 3. MENYUSUN BARISAN TANGGA BINTANG DENGAN NESTED LOOPING  ==============

console.log('\n3. MENYUSUN BARISAN TANGGA BINTANG DENGAN NESTED LOOPING')
var rows3 = 5;
for(var x=0; x<rows3; x++){
    var result = ''
    for(var y=0; y<=x; y++){
        result = result + '*';
    }
    console.log(result);
}