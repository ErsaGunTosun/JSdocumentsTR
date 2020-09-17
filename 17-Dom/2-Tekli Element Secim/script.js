// tekli elemt secmek icin 2 tane ceşidi vardır

//--id ile secme
//secilmek istenen elementin id yazılır

var idText = document.getElementById("headerText1");

console.log(idText);

//--querselector ile secme
// querselectorda elemt secerken iki yol vardır
//id ile secme , clasname ile secme 
// eger aynı id veya clasname olan elementler varsa ilk buldugunu geri dondurur

var idText2 = document.querySelector("#headerText2");
var clasnameText = document.querySelector(".headerText1");

console.log(idText2);
console.log(clasnameText);




idText.textContent="Ersagun";//textContent komudu ile secilen element in yazı icerini degistirebilir

idText.style.color ="red";// style komudu ile üzerinde calıstıgı element in css ozeliklerine erisebiliriz

idText.innerHTML="Ersagun1 <br/>";//inner html ile üzerinde calıstıgı elementin html komudu yazılacagı zaman kullanılır .calıstıgında element in icindeki herseyi siler

idText.innerText="Ersagun";//inner text elementin icine text yazdırmak icin kullanılır .calıstıgında elementin icindekileri siler

idText.className ="text";//classname ile uzerindec calıstıgı elementin clasname ekler ve diger classnameleri siler

idText.classList.add("red");//classlist.add ile uzerinde calıstıgı elementin clasname yeni bir class ekler









