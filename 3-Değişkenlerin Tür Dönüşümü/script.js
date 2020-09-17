//--------------------------------------
console.warn("String Dönüşümü");
//--------------------------------------
//--String Dönüşümü
var stringOlmayanDeger = 10;
console.log(stringOlmayanDeger);
console.log(typeof stringOlmayanDeger);

var stringOlanDeger = String(stringOlmayanDeger);
console.log(stringOlanDeger);
console.log(typeof stringOlanDeger);

//--------------------------------------



console.warn("ToString Dönüşümü");
//--------------------------------------
//--ToString Dönüşümü
var num = 10;
console.log(num);
console.log(typeof num);

var str = num.toString();
console.log(str);
console.log(typeof str);


//--------------------------------------



console.warn("Array To String  Dönüşümü");
//--------------------------------------
//--Array To String Dönüşümü
var arr = ["Ahmet", "Mehmet", "Yusuf"];
console.log(arr);
console.log(typeof arr);

var arrToStr = arr.toString();
console.log(arrToStr);
console.log(typeof arrToStr);

//--------------------------------------



console.warn("Number Dönüşümü");
//--------------------------------------
//--Number Dönüşümü
var numberOlmayanDeger = false;
console.log(numberOlmayanDeger);
console.log(typeof numberOlmayanDeger);

var numberOlanDeger = Number(numberOlmayanDeger);
console.log(numberOlanDeger)
console.log(typeof numberOlanDeger);

//--------------------------------------



console.warn("Ondalıklı Sayı Dönüşümü");
//--------------------------------------
//--Ondalıklı Sayı Dönüşümü
var ondalıklıDeger = 15.23;
console.log(ondalıklıDeger);
console.log(parseInt(ondalıklıDeger));

//--------------------------------------



console.warn("Boolen Dönüşümü");
//--------------------------------------
//--Boolen Dönüşümü
var booleanOlanDeger = 1;
console.log(booleanOlanDeger);
console.log(typeof booleanOlanDeger);

var booleanOlanDeger = Boolean(booleanOlanDeger);
console.log(booleanOlanDeger);
console.log(typeof booleanOlanDeger);