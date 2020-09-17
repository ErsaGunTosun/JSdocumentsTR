// creatin elements 

const name = document.createElement("p"); // element olusturmak icin createElement komudunu kullanıyoruz icine yazılan elementi olusturuyor


name.className = "text";//olusturulan elemente class eklenir

name.innerText = "ersagun";//olusturulan elemente text eklenir
name.style.color ="red";//olusturulan elemente renk eklenir


console.log(name);

var person = document.querySelector(".person").appendChild(name);//ilk olarak olusturulan elementi nereye koyulcagı secilir ve oranınn alt elemanı olaraka eklenir

console.log(person);



