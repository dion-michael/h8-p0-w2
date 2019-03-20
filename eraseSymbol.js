function hapusSimbol(str){
    var library = '!@#$%^&*()-+=~';
    var result = str;
    for(var x=0; x<str.length; x++){
        for(var y=0; y<library.length; y++){
            if(str[x] === library[y]){
                result = result.replace(str[x], '');
            }
        }
    }
    return result;
}

console.log(hapusSimbol('#test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100