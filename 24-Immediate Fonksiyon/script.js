// bir fonksiyonu sadece bir kere basta calıstırmak icin kullanılır 


/*
1.yol
(function()// function argumanları
{
  // islemler
}
()// argumanların degeri
);


2.yol

(function() //function argumanları
{
// islemler
})
()// argumanların degeri
;

*/


(function (name) {

    let deger = `Hoşgeldin ${name}`;
    console.log(deger);


}("fatih"));




(function (name) {

    let deger = `Güle Güle ${name}`;
    console.log(deger);


})
("ersagun");