//asekron programlamada kullanılan bir ara birimdir
//sunucu ile kullanıcı arasında bir asekron metotu olusturmak



var xhr = new XMLHttpRequest(); //sunucudan istek yapmak icin

xhr.onreadystatechange = () => { //herhangi bir olay gerceklestiginde tetiklenecek islem yazılır
    if (xhr.readyState == 4) {
        if (xhr.status == 404) {
            console.log("hatalı");

        } else if (xhr.status == 403) {
            console.log("Kabul edilmedi");

        } else {
            console.log(xhr.responseText);

        }


    }

}


xhr.onprogress = () => {//istek devam ederken calıscak islemler icin kullanılır

    console.log("islem devam ediyor");

};




xhr.open("GET", "message.txt", true); //sunucuncan bilgi alırken, 3 degisken true ise asekron false sekron progromlama yapar
xhr.send();//open ile istek belirtikten sonra istek sunucuya gondermek icin kullanılır

//xhr.open("POST","message.txt",true);//sunucuya bilgi gonderirken kullanılır, 3 degisken true ise asekron false sekron progromlama yapar

/*

ReadyState Degerleri
0: request baslatılmamıs
1: sunucu ile baglantı kurulmussa
2: request alınmıssa 
3: reques devam ediyorsa
4: request bitmise

*/

/*

Status
200: basarılı 
403: talibin onaylanmadıgı 
404: bulunamadı

*/