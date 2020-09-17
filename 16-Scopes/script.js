//----functionlar kendi scope alanları olusturur ve icinde olusturulan degerler dısarıdan erisilemez


function deger(){
    let merhba ="merhaba";
}


//console.log(mrhba); fonksiyon icindeki degiskeni consola yazdırdıgın  hata mesajı geri dondurur


//----Blocklar kendi scopelarını olusturmaz
// ama block icinde olusturaln degisken (let ,const)ile olusturulsa kendi scope alanını olusturur


if(true){
    var name = "ersagun";
    var age = 12;
};


console.log(name,age);



if(true){
    let name1 = "ersagun";
    const age1 = 12;
};


//console.log(name1,age1);   consola yazdırdıgın  hata mesajı geri dondurur





