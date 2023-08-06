
var TotalName ;
var Name = "ersagun";
var Surname = "tosun";
var Hobiler = "cod,spor,reading,tennis"



TotalName = Name + " " + Surname; // iki string degeri birlestirir
console.log(TotalName);
 
TotalName = Name;// degiskenen strin degeri tanımlandı
TotalName += Surname; // degiskenin icinde olan deger ile birlesitit // TotalName = TotalName + Surname

console.log(TotalName);


// Tek Tırnak icinde Tek Tırnak Kullanımı 

var Deger = 'İzmit\'te'// Tek tırnak icinde tık tırnak kullanırken string olarak kullanılcak tırnak yanına Ters Slash (\) konur
console.log(Deger);

// concat metodu

TotalName = Name.concat(" ",Surname);// iki string değişkenini birleştirmek icin kullanılır
console.log(TotalName);


// lenght metodu

TotalName = Name.length;// uzerinde calıstıgı degerin uzunkugunu geri dondurur
console.log(TotalName);


// UpperCase , LowerCase

TotalName = Name.toLowerCase();// uzerinde calıstıgı degiskenin butun harflerin kucuk yapar
console.log(TotalName);  
 
TotalName = Name.toUpperCase();// uzerinde calıstıgı degiskenin butun harflerini buyuk yapar
console.log(TotalName);

//indexof

TotalName = Name.indexOf("s");// uzerinde calıstıgı degiskenin icinde kendigine verilen degeri ara ver geri deger dondurur
console.log(TotalName);


//substring 

TotalName= Name.substring(0,5);// uzerinde calıstıgı degerin icinden kendigi verilen deger kadar kesit alır
console.log(TotalName);


//slice

TotalName = Name.slice(2,4);
console.log(TotalName);

//replace 

TotalName = Name.replace("ersagun","fatih");// uzerinde calsıtı degerin kendisine verilen deger ile degistirir (ilk girilen deger degistirilecek deger ikinci ise yeni deger)
console.log(TotalName);

// trim

TotalName = "    "+ Name + "    ";
console.log(TotalName);
TotalName = TotalName.trim();//uzerinde calıstıgı degeri basındaki ve sonundaki boslukları siler
console.log(TotalName);


// split

TotalName = Hobiler.split(",");//üzerinde calıstıgı degerin kendisine veriler degerlerden keserek array(dizi) olustutur
console.log(TotalName);