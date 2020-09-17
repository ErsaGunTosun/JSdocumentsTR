//sunucu bloglamadan gerceklesen islemlerdir 

const ucuncu = () => {
    console.log("üç");

};

const ikinci = () => {
    setTimeout(() => {
        console.log("iki");

    }, 2000);

    ucuncu();

};

const birinci = () => {
    console.log("bir");

    ikinci();
}

birinci();


// yukarıda yaptıgımız ornekte ikici fonksiyonda iki saniye beklemme var ama 2 saniyeyi beklemeden bir altdaki kodu calıstırı ve daha sonra iki saniye bekler ve kendi gorevini gerceklesitir