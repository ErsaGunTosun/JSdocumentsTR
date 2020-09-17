//bir object icinde function icinde funtion tanımlayınca ana objeye this metodu ile ulasılmıyor 
//ES6 ile gelen funtion tanımı ile bu sorunu cozuyoruz



//ES5
var obje1 = {
    name: "ersagun",
    surname: "tosun",
    number: [14, 16, 556, 155, 14555],
    call: function () {
        let deger1 = this;
        this.number.map(function (deger) {
            console.log(`${deger1.name} ${deger}`);

        })
    }

};

obje1.call();

// yukarıda icinki funtionda this.name cagırdıgımızda undifenied deger gelirl
// ilk function icinde this objesi olan bir degisken tanımlayınca cozuluyor 


//ES6
var obje2 = {
    name: "fatih",
    surname: "tosun",
    number: [14, 16, 556, 155, 14555],
    call: function () {
        this.number.map((deger)=>{
            console.log(`${this.name} ${deger}`);

        })
    }

};

obje2.call();

//yukarıda ise function icine arrow function (kendi scope alınanı olmadıgı icin) kullandıgımız bu hata cozuluyo


