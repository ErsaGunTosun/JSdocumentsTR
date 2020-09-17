//sets object benzer

let Numbers = new Set(); //set nesnesini olusturma

Numbers.add(1); //add komudu icine girilen degeri olusturulan nesneye gonderir
Numbers.add(2);
Numbers.add(3);
Numbers.add(3); //gonderilen deger eger nesnenin icinde varsa gonderilmez

console.log(Numbers);



let val = Numbers.has(1); //icine girilen degeri uzerinde calıstgı degiskende olup olmadıgını kontrol eder

console.log(val);

let val1 = Numbers.size; //uzerinde calıstıgı set nesnesinin uzunlugunu gosteririr

console.log(val1);

let val2 = Numbers.keys(); // uzerinde calısdıgı set nesnesini elemanları geri dondurur

console.log(val2);

let val3 = Numbers.values(); // uzerinde calısdıgı set nesnesini elemanları geri dondurur

console.log(val3);


for (let deger of Numbers) {//elemanları tek tek geri dondurur
    console.log(`deger : ${deger}`);

}


let val4 = Numbers.delete(1); // kendine verilen degeri uzerinde calıstıgı set nesnenin iciden siler

console.log(Numbers);


let val5 = Numbers.clear();//uzerinde calısdıgı set nesnesinin tum elemanlarını siler 

console.log(Numbers);
