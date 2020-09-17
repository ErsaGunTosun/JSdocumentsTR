//kodlar calısırken olusucak hataları yakalamak icin kulalanılır
// try hata olup olmadıgını kontrol eder 
//catch hata oldugu zaman ne yapılcakgı yazılan yerdie


try{
    console.log(name(0));
    
}
catch(e){
    console.log(e);
    
    console.log(e.message);
    

}


// ERORO GONDERME 

let ersagun = {
    name:"ersagun"
}


try{
    if(!ersagun.mail){
        throw new Error("kullanıcı mail yok")
    }
}
catch(e){
    console.log(e);
    
}