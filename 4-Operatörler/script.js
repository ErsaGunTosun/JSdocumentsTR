var a = 2;
var b = 10;
var total;
//---------------------------------------------------------------------------------
//****Matematiksel Operatörler

total = a + b; // iki degiskeni toplar
total = a - b; // iki degiskeni cıkarır
total = a * b; // iki degiskeni carpma
total = a / b; // iki degiskeni boler
total = a % b; // iki sayının bolumunda kalanını alır

++a; //ilk çalışdığında sayıyı bir artırır
b++; //ikinci çalışdığında sayıyı bir artırır

//---------------------------------------------------------------------------------
//****Atama Operatörler

a += b; // a = a + b;
a -= b; // a = a - b;
a *= b; // a = a * b;
a /= b; // a = a / b;
a %= b; // a = a % b;

//---------------------------------------------------------------------------------
//****Karsılastıma operatorleri 

total = a == b; // a b ye esitse true olur 
total = a === b; // a b ye hem deger hemde tür bakımdan esitse true olur 
total = a != b; // a b ye esit degilsetrue olur 
total = a !== b; // a b ye hem deger hemde tür bakımdan esit degilse true olur 
total = a < b; // a b den kucukse true olur 
total = a > b; // a b den buyukse true olur 
total = a <= b; // a b ye esit veya kucukse true olur 
total = a >= b; // a b ye esit veya buyukse true olur

//---------------------------------------------------------------------------------
//****Mantıksal Operatorler

total = a && b; // iki degerde true olursa sonuc true olur 
total = a || b // iki degerden biri true olursa sonuc true olur
total = !a; // deger true ise false yapar

//---------------------------------------------------------------------------------