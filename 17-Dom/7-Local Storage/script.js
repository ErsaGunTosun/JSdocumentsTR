//local depoda veri tutmaya local storege denir


var deger = "ersagun";


//local storage deger gonderme
localStorage.setItem("degerler",deger);//ilk yazılan deger ismi ikinici yazılan deger ise gonderilercek deger;


//local storageden deger alma

var val = localStorage.getItem("degerler");//alınmak istenen degeri ismi yazılır
console.log(val);


//local storageden  deger silme

localStorage.removeItem("deger")//silmek istenen degeri ismi yazılır