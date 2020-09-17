//rest parameters Fonksiyonlara sınır sayısı olmadan parametre geçmeye olanak verir.
// kullanım sekli function parameters yerine spread metodu ile dizi yazıyoruz
// rest parameters her zaman parametre sıralamasında en sonda olması 
/// bir fonksiyon sadece bir tane rest parametres tanımlanabilir



function toplama(...sayılar){
    var toplam = 0;
    sayılar.forEach(item => toplam+=item);
    return toplam;

}


console.log(toplama(10,120,20));





function TotalWords(...words){
   let totalwords = "";
  words.forEach(word =>totalwords+=word+" ");

  return totalwords;
  console.log(totalwords);
  
}

console.log(TotalWords("fatih","ersagun","tosun"));
