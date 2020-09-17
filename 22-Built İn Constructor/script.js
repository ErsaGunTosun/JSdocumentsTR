// degisken turlerine  ozelik katmak icin kullanılır

//String

var str = "ersagun";// olusturulan deger türü string olur 
console.log(str);
console.log(typeof str);

var str1 = new String("ersagun"); // olusturulan deger türü object olur ve ozelikler kazanır
console.log(str1);
console.log(typeof str1);


//Number

var num = 5;
console.log(num);
console.log(typeof num);

var num1 = new Number(5);
console.log(num1);
console.log(typeof num1);



//Boolean

var bool = false;
console.log(bool);
console.log(typeof bool);

var bool1 = new Boolean(false);
console.log(bool1);
console.log(typeof bool1);


//Array 

var arr = ["ersagun","fatih","tosun"];
console.log(arr);
console.log(typeof arr);

var arr1 = new Array("ersagun","tosun","fatih");
console.log(arr1);
console.log(typeof arr1);


// object

var obj1 = {
    name: "fatih"
}; // olusturulan deger türü object  olur
console.log(obj1);
console.log(typeof (obj1));

var obj2 = new Object({
    name: "ersagun"
}); // olursturulan degerin proto kısmın genisletir
console.log(obj2)
console.log(typeof (obj2));


//ornek

String.prototype.tekrarla = function (n) {
    return new Array(n + 1).join(this)
};


console.log(str2.tekrarla(2));


Array.prototype.remove = function (deger) {
    let index = this.indexOf(deger);

    if (index >= 0) {
        this.splice(index, 1);
    }
    return this;
};

console.log(arr2.remove("ersagun"));