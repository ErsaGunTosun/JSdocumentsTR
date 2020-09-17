//map diziye benzer bir yapırdır
// map icinde keys ve value vardır
// ilk deger keys ikinci deger value
// map tanımlama formulu  new maps 


let Sayılar = new Map();

Sayılar.set(1, "bir"); //set komudu ile map nesnesine keys ve value gonderiyoruz
Sayılar.set(2, "iki");
Sayılar.set(3, "üc");
Sayılar.set(4, "dört");
Sayılar.set(5, "beş");

console.log(Sayılar);


let val = Sayılar.get(1); // get komudu ile girilen key ile key denk gelen value geri dondurur

console.log(val);

let val1 = Sayılar.size; //size komudu ile map nesnesin uzunlugu geri dondurur

console.log(val1);

let val2 = Sayılar.values(); //value komudu ile map nesnesinin sadece value degerlerine geri dondurur

console.log(val2);

let val3 = Sayılar.keys(); //keys komudu ile map nesnesinin sadece keys degerlerine geri dondurur

console.log(val3);

let val4 = Sayılar.has(1); // has komudu ile icine girilen degerin map nesnesinin icinde olup olmadıgını gosterir

console.log(val4);

let val5 = Sayılar.delete(5); //delete komudu ile icine girilen degerin map nesnesinin icinden siler

console.log(Sayılar);

let val6 = Sayılar.clear(); //clear komudu ile uzerinde calısdıgı map nesnesinin icindeki herseyi siler

console.log(Sayılar);


let Numbers = new Map([

    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"]
]);

console.log(Numbers);


for (let [keys, value] of Numbers) {

    console.log(`keys = ${keys} , value = ${value}`);

};