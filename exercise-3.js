var nama = 'Nina';
var peran = 'tabib';
var output = '';

if(!nama){
    output = 'Nama harus diisi!';
}

else if(!peran && nama){
    output = 'Halo ' + nama + ', Pilih peranmu untuk memulai game!';
}

else if(nama && peran){

    //Added .toLowerCase() to ignore letter case

    //=========== KSATRIA ====================
    if(peran.toLowerCase() === 'ksatria'){
        output =    '\"Selamat datang di Dunia Proxytia, ' + nama 
                    + '\" \n\"Halo ' + peran + ' ' + nama + 
                    ', kamu dapat menyerang dengan senjatamu\"';
    }

    //=========== TABIB ======================
    else if(peran.toLowerCase() === 'tabib'){
        output =    '\"Selamat datang di Dunia Proxytia, ' + nama 
                    + '\" \n\"Halo ' + peran + ' ' + nama + 
                    ', kamu akan membantu temanmu yang terluka.\"';
    }

    //=========== PENYIHIR ===================
    else if(peran.toLowerCase() === 'penyihir'){
        output =    '\"Selamat datang di Dunia Proxytia, ' + nama 
                    + '\" \n\"Halo ' + peran + ' ' + nama + 
                    ', ciptakan keajaiban yang membantu kemenanganmu!\"';
    }

    //=========== IF PERAN INVALID ===========
    else{
        output =    'Halo, ' + nama + '. Di Dunia Proxytia tidak ada peran ' + peran +
                    '. Silahkan pilih peran yang lain.'
    }
}

console.log(output);