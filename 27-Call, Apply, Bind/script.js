// call bir fonksiyona parametre gonderirken kullanılır

var deger = function(){
    console.log(`merhaba ${this.name}`);
    
}

var ersagun = {
    name : "ersagun"
};

deger.call(ersagun);


// apply bir fonksiyona parametre gonderirken kullanılır. call den tek farkı birden fazla parametre gonderirken dizi seklinde gonderilmesi

var tosun = {
    name:"tosun"
};

deger.apply(tosun);

//bind bir fonksiyon ile degiskeni ilişkendirerek gereyi fonksiyon dondurur

var fatih = {
    name:"fatih"
};

var deger2 = deger.bind(fatih);

deger2();


