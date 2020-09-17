//es6 ile gelen function tanımlamasındır

//ES5
let FunctionES5 = function () {
    console.log("ES5 Function");

};

FunctionES5();

//ES6

let FunctionES6 = () => { // ES6 function tanımlarken parantes "()" acıp kapatıp,esittir koyup ve saga dogru ok koyup suslu parantez acıp icne islemler yazıyoruz
    console.log("ES6 Function")

};

FunctionES6();


//ES6 parametres

let ParametresES6 = (x, y) => x * y;
// eger kod tek satırsa suslu paranteze gerek yoktur
console.log(ParametresES6(10, 20));


//ES6 Object literals

let literalsES6 = (name, id) => ({ // object literals yapraken fonksiyon icin tamınlana suslu parantez normal parantez oluyo
    name: name,
    id: id,
});

console.log(literalsES6("ersagun",5));
