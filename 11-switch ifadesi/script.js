/*

karsılastırma anlamaına gelir if ve else basitlesmis halidir


switch = kosulun hangi deger uzelinde yapılcak oldugunu belirtir

case =  kosulu belirtir

default = switch uzerinde hicbir kosul saglanmazsa calısacak komutdur

break = calısan kosulu bitirmek icin kullanılır

*/

var deger = 1;



switch (deger) {
    case 1:
        console.log(`deger 1`);
        break;
    case 2:
        console.log(`deger 2`);
        break;
    case 3:
        console.log(`deger 3`);
        break;

    default:
        console.log("deger algınamadı");
        break;
}