
//=================  1. MELAKUKAN LOOPING MENGGUNAKAN WHILE  ===================

console.log('1. MELAKUKAN LOOPING MENGGUNAKAN WHILE');
var x = 0;
console.log('LOOPING PERTAMA')
while(x<20){
    x=x+2;
    console.log(x + '- I love coding');
}
var y = 20;
console.log('LOOPING KEDUA')
while(y>0){
    console.log(y + '- I will become fullstack developer');
    y=y-2;
}

//==================  2. MELAKUKAN LOOPING MENGGUNAKAN FOR  ====================

console.log('\n2. MELAKUKAN LOOPING MENGGUNAKAN FOR');
console.log('LOOPING PERTAMA');
for(var x=1; x<=20; x++){
    console.log(x + '- I love coding');
}
console.log('LOOPING KEDUA');
for(var x=20; x>0; x--){
    console.log(x + '- I will become fullstack developer');
}

//=========================  3. ANGKA GANJIL GENAP  ============================

console.log('\n3. ANGKA GANJIL GENAP')

//PERTAMBAHAN COUNTER = 1
console.log('\nA. COUNTER = 1')
for(var x=1; x<=100; x++){
    if(x%2 === 0){
        console.log(x + ' = GENAP');
    }
    else{
        console.log(x + ' = GANJIL');
    }
}

//PERTAMBAHAN COUNTER = 2
console.log('\nB. COUNTER = 2')
for(var x=1; x<=100;){
    if(x%3 === 0){
        console.log(x + ' KELIPATAN 3');
    }
    x=x+2;
}

//PERTAMBAHAN COUNTER = 5
console.log('\nC. COUNTER = 5')
for(var x=1; x<=100;){
    if(x%6 === 0){
        console.log(x+' KELIPATAN 6');
    }
    x = x + 5;
}

//PERTAMBAHAN COUNTER = 9
console.log('\nD. COUNTER = 9')
for(var x=1; x<=100;){
    if(x%10 === 0){
        console.log(x+' KELIPATAN 10');
    }
    x = x + 9;
}
