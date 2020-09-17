let degerler = ["BMW", "Toyota", "Opel", "Mercedes"];
let degerler2 = [
    {
        firstname: "ersagun",
        lastname: "Tosun",
        age: 14
    } ,
    {
        firstname: "kamil",
        lastname: "kara",
        age: 16
    },
    {
        firstname: "emir",
        lastname: "cccd",
        age: 17
    }
    

]




//for
 
//arrays
for (let i = 0; i < degerler.length; i++) {

    console.log(degerler[i]);


}

//object
for (let i = 0; i < degerler2.length; i++) {

    console.log(degerler2[i].firstname);


}


//while
console.warn("While");
let deger = 0;
let deger2 = 0;

//arrays
while (deger < degerler.length) {

    console.log(degerler[deger]);
    deger++;


} 

//object
while (deger2 < degerler2.length) {

    console.log(degerler2[deger2].lastname);
    deger2++;


}


// for-in
// for in  olusan dizi eleman sayısı teker teker geri dondurur
console.warn("For-in");

//arrays
for (let i in degerler) {

    console.log(degerler[i]);

}

//object
for (let i in degerler2) {

    console.log(degerler2[i].age);

}

//forech
// diz elemanları teker teker fonksiyona gonderir
console.warn("Forech");

//arrays
degerler.forEach(function (sayı) {
    console.log(sayı);

})

//object
degerler2.forEach(function (sayı1) {
    console.log(sayı1);

})


//map
//// diz elemanları teker teker fonksiyona  gonderir ve olusan degerleri ayrı bir dize yapar
console.warn("map");
let val ;

val = degerler2.map(function(sayı2){

    return sayı2.firstname;
})
console.log(val);
