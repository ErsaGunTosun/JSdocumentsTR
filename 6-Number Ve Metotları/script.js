let deger = "10.5";
let deger2 = 10.5555454545456;




deger = Number(deger); // string olan degeri Number donusturur
deger = parseInt(deger); // stirng ve ondalılı olan degeri Number ve interger yapar
deger = parseFloat(deger); // string olan ondalıklı degeri Number yapar
deger = isNaN(deger); // verinin Number türünü donsuturulup donusturulmeyecegini kontrol eder


deger = deger2.toPrecision(1); // uzerinde calıstıgı degerin kac satıru yazılcagını gosterir(1 - 100 arasında deger girilir)
deger = deger2.toFixed(1); // uzerinde calıstıgı degerin virgülden sonra kac sayı yazcagını gosterir 

console.log(deger);
console.log(typeof deger);


//Math Metotları 

let degisken;


degisken = Math.PI; // pi sayısını geri gonderirr
degisken = Math.round(2.4); // üzerinde calısan degerin en yakına yuvarlar ( 0 - 4 arası ise alt ,  5 - 9 arası ise üst  yuvarlar )
degisken = Math.floor(2.4); //uzerinde calısdıgı degeri her zaman bir  alta yuvarlar
degisken = Math.ceil(2.7); // uzerinde calsıdıgı degeri her zaman bir üste yuvarlar
degisken = Math.sqrt(64); // uzerinde calısdıgı degerin karekod degerini alır
degisken = Math.pow(2, 4); // uzerinde calısdıgı degerin ussunu alır ( ilk deger alt kısım , ikinci deger üst kısım)
degisken = Math.abs(-10); // uzerinde calısdıgı degerin mutlak degerini alır 
degisken = Math.min(1, 24, 553, 55, 5); // uzerinde calısdıgı degerlerin en kucuk olanı geri dondurur
degisken = Math.max(1, 5, 777, 51, 6, 67, 7); // uzerinde calısdıgı degerlerin en buyuk olanı geri dondurur
degisken = parseInt(Math.random() * 10 + 1); // random ondalılı deger uretir ;
                                            // Math.random()* üst sınır ;  
                                           // parseInt(Math.random()* üst sınır) ; olusan ondalıklı degerleri tamsayı yapar
                                          // eger olusan degerlerde sıfırın olmaması icin Math.random()*(üstsınır + 1);







console.log(degisken);
console.log(typeof degisken);