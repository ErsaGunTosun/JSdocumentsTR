// bir elemente olay eklemek icin kullanılır

var btn = document.querySelector(".btn");// event eklicegimiz elemetni seciyoruz

btn.addEventListener("click",merhaba);// ilk yazılan deger olayın ne zaman calıscagını , ikincisi ise function belirlenir

function merhaba(){
    console.log("merhaba");
    
}

