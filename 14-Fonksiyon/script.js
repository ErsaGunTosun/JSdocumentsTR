//foksiyonlar bir islemi veya olayı kolaylastırmak icin kullanılar ifadelerder

/*

function funksiyon ismi (deger girilecekse degerler ){
    yapılacacak islem
};





*/





function toplama(sayı1, sayı2) {
    return sayı1 + sayı2;
};

console.log(toplama(10, 12));



function age(yearsofbirth) {
    let tarih = new Date();
    tarih = tarih.getFullYear();

    return tarih - yearsofbirth;
}

console.log(age(2004));



//---------------------------------------------------------------------------------
// iki cesit function tanımlama  vardır

// Function  Declarations

function cıkarma(a, b) {
    let total;
    if (a < b) {
        total = b - a;
    } else if (a > b) {
        total = b - a;
    } else {
        total = a - b;
    }
    return total;
}


console.log(cıkarma(10, 20));



// Function Expressions

const carpma = function (a, b) {
    return a * b;
}


console.log(carpma(10,5));


//---------------------------------------------------------------------------------
//Default parametreli function

// funksiyona deger girilmeyince verilen degerdir
function yılHesaplama(b=1990){
    let tarih2 = new Date();
    return tarih2.getFullYear() - b;
};

console.log(yılHesaplama());


// Argument deger

const argumen = function(){
    return arguments;
}

var dg1= argumen(10);

var dg2 = Number(dg1);



console.log(argumen(10));

