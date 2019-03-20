// JOSEPHUS PROBLEM
// THERE ARE N PERSON, EACH PERSON KILLS THE PERSON NEXT TO THEM
// UNTIL 1 IS LEFT
function josephusProblem(input){
    var kelipatan = 0;
    var terdekat = 0;
    //CEK JIKA INPUT <=2 RETURN 1
    if(input<=2){
        return 1;
    }
    else{
        // CARI 2 PANGKAT N TERDEKAT DENGAN INPUT
        while(Math.pow(2, kelipatan) <= input){
            terdekat = 2**kelipatan;
            kelipatan++;
        }
        // CHECK IF ANGKA TERDEKAT = INPUT
        if(terdekat === input){
            return 1;
        }
        else{
            // CARI JARAK ANTARA INPUT & ANGKA TERDEKAT
            var loop = input - terdekat ;
            var result = 1;
            // LOOP SEBANYAK JARAK ANTARA INPUT & ANGKA TERDEKAT
            for(var x = 0; x<loop; x++){
                // EVERY LOOP TAMBAH 2, MULAI DARI 0
                result = result + 2;
            }
            return result;
        }
    }
}
var input = 64;
for (x=1; x<=input; x++){
    console.log('warrior: ' + x + ', survivor: ' + josephusProblem(x));
}

// ITS PATTERN:
// EVERY 2 POWER N ALWAYS RESULT IN 1
// AFTER 2 POWER N, THE RESULT IS ALWAYS INCREMENT BY 2 UNTIL U GET 2 POWER N NUMBER AGAIN
// EX: 
// INPUT 8 = 1
// INPUT 9 = 3
// INPUT 10 = 5
// ...
// INPUT 16 = 1
// INPUT 17 = 3
// INPUT 18 = 5
// ...
// INPUT 32 = 1
// INPUT 33 = 3
// INPUT 34 = 5
// INPUT 35 = 7
// ...

// 123                      n = 3
// 3

// 1234                     n = 4
// 13
// 1

// 12345                    n = 5
// 35
// 3

// 123456                   n = 6
// 135
// 5

// 1234567                  n = 7
// 357
// 7

// 12345678                 n = 8
// 1357
// 15
// 1

// 1 2 3 4 5 6 7 8 9        n = 9
// 3 5 7 9
// 3 7
// 3

// 12345678910              n = 10
// 13579
// 159
// 5

