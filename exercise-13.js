function xo(str) {
    // you can only write your code here!
    var countX = 0; //to count how many x are there
    var countO = 0; //to count how many o are there
    for(x=0; x<str.length; x++){
        if(str[x] === 'x'){
            countX++;
        }
        else if(str[x] === 'o'){
            countO++;
        }
    }
    if(countX === countO){
        return true;
    }
    else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true