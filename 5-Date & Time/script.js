var tarih = new Date();// yeni bir tarih olusturur


//****Tarih verileri alma****//

console.log(tarih);//tarih consola yazdırır

console.log(tarih.getFullYear());// yılı consola yazdırır

console.log(tarih.getDay());// haftanın gunuyu yazdırır

console.log(tarih.getDate());// gunleri consola yazdırır

console.log(tarih.getHours());// saati consola yazdırır

console.log(tarih.getMinutes());// dakikaya consola yazdırır

console.log(tarih.getSeconds());// saniyeye consola yazdırır



//****Tarih Degistirme****//

var tarih2 = new Date();

console.log(tarih2);

tarih2.setFullYear(2004);//yılı degistirme
console.log(tarih2);

tarih2.setDate(4);//gunu degistirme
console.log(tarih2);

tarih2.setHours(12);//saat degistirme
console.log(tarih2);

tarih2.setMinutes(00);//dakikayı degistirme
console.log(tarih2);

tarih2.setSeconds(00);//saniyeyi degistirme
console.log(tarih2)









