let deger = ["ersagun", "ferah", "yigit"];
let degisken = [1990, 1009, 1245, 155623];

//array item yazdırma
console.log(deger[0]);


//array item degistirme
deger[2] = "tosun"; //eger bir kısım bos bırakılırsa ( empty ) olur.


//array item ekleme
deger.push("kamil"); //array sonuna ekleme
deger.unshift("tugra"); //array basına ekleme


//array item silme
deger.pop(); //array sonundaki itemi siler
deger.shift(); //array basındaki itemi siler


//indexof
var deger1 = deger.indexOf("tosun"); //üzeinde calıstıgı dizinenn icinde kendine verilen degeri arar ve geriye sıra numarasını dondurur
console.log(deger1);


//reverse
deger.reverse(); //diziye ters cevirir


//sort
deger.sort(); //diziye alfabatik sıraya veya dizide sayılardan olusuyo ise kucukden buyuge sıralar


//concat
deger = deger.concat(degisken); //iki veya daha cok  diziyi birlestiri


//splice
deger = deger.splice(0, ); //


//find


//filter