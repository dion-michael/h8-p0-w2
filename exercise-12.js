function konversiMenit(menit) {
    // you can only write your code here!
    var hours = Math.floor(menit/60); //find hours without the decimal
    var min = menit % 60; //find the minutes remaining
    if(min<10){
        min = '0' + min; //to make sure minutes < 10 is always displayed with 2 digit format
    }
    return hours + ':' + min;
    
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00