/* 

--> Değişkenler Bilgiler <--

>>> Değişken = Kendisine verilen veriye saklayan bir yapıdır.

>>> Değişken tanımlarken kullanılan isimlerde dikkat edilmesi gereken kurallar
    1.Değişkene verilcek isim hiçbir zaman sayı ile başlamaz.
    2.Değişken verilcek isim alt çizgi(_) veya dolar işareti ($) ile başlayabiliri.
    3.Değişken isimleri büyük veya küçük harf duyarlıdır.
    4.Değişken isimlerinde javascript için özel olan isimler kullanılmaz. Örn: function, const, for
    5.Değişken isimlerinde boşluk bırakılmaz.

*/

/*

--> Değişken Türleri <--
>>> Değiken oluşturmak için 3 tane yapı vardır.
    1.var 
    >> Her yerden ulaşılabilir ve değiştirilebilir bir yapıdır.
    2.let 
    >> Scope alanı ( Kapsam alanı ) dar olan bir yapıdır. var sadece tek farkı budur.
    3.const
    >>> Her yerden ulaşılabilir ama değiştirilemez bir yapıdır.

*/

// Örnekler

// Değişken İsim kuralları 1 örnek
//var 1sayı = 10; // Eğer bu satırı aktif ederseniz hata alacaksınız.


// Değişken İsim kuralları 2 örnek
var _Değer;
var $Değer;


// Değişken İsim kuralları 3 örnek
var sayı = 10;
var Sayı = 5;

console.log(sayı); // çıktı 10
console.log(Sayı);// çıktı 5

// Değişken İsim kuralları 4 örnek
// var for; // Eğer bu satarı aktif ederseniz hata alacaksınız.


// Değişken Türleri örnek

var Deger = "Ersagun";

let Dil = "Javascript";

const Ülke = "Türkiye";


