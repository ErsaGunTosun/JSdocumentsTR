// elemet kaldırmak icin remove() kullanıyoruz



let name = document.querySelector(".name");//silecegimiz elemanı seciyoruz
console.log(name);
name.remove();//remove elemanı ile elemanı siliyoruz

let list  = document.querySelector(".list");
console.log(list);

list.children[0].remove();// tanımladıgımız elemanı icndeki alt elemanlarında verilen degere denk geleni siler

list.children[0].removeAttribute("class");// bir elemananın ozeliklerlerini silmek icin kullanılır




//element guncelleme 

// element replace 

var age2 = document.createElement("p");//yeni element olsuturuyoruz
age2.textContent= "age : 16";

let Person  = document.querySelector(".Person");//degistircegimiz elementin kısmına eriscez
let age = document.querySelector(".age");//degistircegimiz elementi secces

Person.replaceChild(age2,age);//ilk once yeni elemnet sonra degiscek element



