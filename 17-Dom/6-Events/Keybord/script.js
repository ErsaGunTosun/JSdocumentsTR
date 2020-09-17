let giris = document.querySelector(".giris");




//giris.addEventListener("keydown", event);//klavyeden tusa basıldıgında calısan olay

//giris.addEventListener("keyup", event);//klavyeden tusa basıldıgında sonra geri gecikldigen  calısan olay


//giris.addEventListener("keypress",event);//tusa basıldıgında calısan olaylardır

//giris.addEventListener("focus",event);//klavyeden harf girmek icin tıklandıgında calısan olaylardır

//giris.addEventListener("blur", event);//klavyeden harf girmek icin tıklandıgında sonra geri cıkıldıgında calısır calısan olaylardır

//giris.addEventListener("cut",event);//ınputdan olan harfleri kesilince calısan olaydır

//giris.querySelectorAll("paste",event);//ınputdan olan yere harf yapıstırınca  calısan olaydır






function event(e){
    console.log(e.type);
    console.log(e.target.value);
    
    
}