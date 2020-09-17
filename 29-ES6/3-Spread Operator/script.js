//spread metodu = üc nokta(...) ve dize ismi ile gerceklesir . dizilerin elemanlarını teker teker geri dondurur

let fruit = ["elma","armut","cilek"];
let newFruit = ["muz","erik","karpuz"];

let totalFruit = [...fruit,...newFruit];

console.log(totalFruit);


let names = ["ersagun","tosun","fatih"];
let surname = ["tosun","deniz","demir"];

let fullName = [...names,...surname];




let total = fullName.forEach(deger=>console.log(`isimler ${deger}`));






