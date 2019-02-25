var tanggal = 21;
var bulan = 1;
var tahun = 1945;

/* input invalid jika: 
        - tanggal = 0 or tanggal > 31, atau
        - bulan = 0 or bulan > 12, atau
        - tahun = 0 or tahun < 1900 or tahun >2200 */

if(!tanggal || tanggal>31 || !bulan || bulan > 12 || !tahun || tahun<1900 || tahun>2200){
    console.log('invalid input');
}

else{
    switch(bulan){
        case 1:
            bulan = 'Januari';
            break;
        case 2:
            bulan = 'Februari';
            break;
        case 3:
            bulan = 'Maret';
            break;
        case 4:
            bulan = 'April';
            break;
        case 5:
            bulan = 'Mei';
            break;
        case 6:
            bulan = 'Juni';
            break;
        case 7:
            bulan = 'Juli';
            break;
        case 8:
            bulan = 'Agustus';
            break;
        case 9:
            bulan = 'September';
            break;
        case 10:
            bulan = 'Oktober';
            break;
        case 11:
            bulan = 'November';
            break;
        case 12:
            bulan = 'Desember';
            break;
        default:
            break;
    }
    console.log(tanggal + ' ' + bulan + ' ' + tahun);
}

