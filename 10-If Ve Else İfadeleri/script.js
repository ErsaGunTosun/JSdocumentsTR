// if ve else kosul bildirmek icin kullanılır

/* 
if = degerleri karsılastımak icin kullanılır yanlızca true olunca calısır

else = if den sonra kullanılır anlamı degilse if degeri false olunca calısır

else if = degilse ise anlamına gelir  if den sonra kullanılır if degeri false olunca ve kendi kosulu true olunca calısır


*/


var a = 20;
var b = 20;


if (a > b) {
    console.log(`a degeri b degerinden büyüktür`);

}
else if(a < b){
    console.log(`b degeri a degeriden büyüktür`);
    
}
else{
    console.log(`a degeri b degerine eşittir`);
    
}