// window nesnesi ile sayfadaki herseye erisebiliriz

console.log(window); //window nesnesi consola yazdırıp ozeliklerine bakabilirsiniz

window.alert("merhaba") //window.alert komudu ile window objesinin icinde alert metodu ile ekranda uyarı mesajı cıkarabiliriz

window.confirm(" kabul ediyomusun "); // window nesnesini icinde confirm metodu ile ekranda iptal ve tamam cıkar ve tıklanan degere gore geriye true veya false deger dondurur

window.prompt("Deger Giriniz"); // window nesnesi icinde prompt metodu ile kullanıcıdan deger alınır ve degeri geri dondurur



var deger1 = window.scrollX; //sayfanın scroll x degerini geri dondurur
var deger2 = window.scrollY; //sayfada scrollY degerini geri dondurur

console.log(deger1);
console.log(deger2);


var val;

//val  = window.location.reload();//sürekli sayfayı yeniler

val = window.location; // sayfanın adres cubugundaki bilgilere ulasmak icin kullanılır

console.log(val);


var str;
str = window.document; // html dosyasındaki elemanlara ve taglara ulsamak icin kullanılır