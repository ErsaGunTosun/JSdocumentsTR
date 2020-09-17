//Destructuring ile deger atama

// Destructuring deger atarken koseli parantez ile esitlik sağlayıp atarıyoruz
var a,b;

[a,b] = [10,20];

console.log(a);
console.log(b);



// dizlerde Destructuring

var sayı1, sayı2, sayılar;
//diziye deger atarken diziyi spread metodu ile yazıyoruz diger degiskenler atılan sayılardan kalanalar hepsi dizi icine diyo
[sayı1,sayı2,...sayılar] = [10,20,50,40,24,55];
console.log(sayı1);
console.log(sayı2);
console.log(sayılar);



// object Destructuring

const obje1={
    name : "ersagun",
    surname : "tosun",
    age : 15
};

let {name,surname,age} = obje1;

console.log(name,surname,age);


//default parametres

var c,d;

[c=10,d=20] = [];//deger olmayınca default deger devreye girer

console.log(c);
console.log(d);


//Dizede pas gecme
//gecmek istedigimmiz dizi elemanı kadar virgül isareti kullanıcaz

let hafta = ["pazartesi","salı","carsamba","persembe","cuma","cumartesi","pazar"];

let salı,cuma ;

[,salı,,,cuma]= hafta;

console.log(salı,cuma);