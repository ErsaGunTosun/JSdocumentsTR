// olusturulan constructor  ozellik atmak icin kullanılır


function Person(name, surname, yearsofBith) {
    this.name = name;
    this.surname = surname;
    this.yearsofBith = yearsofBith;
}

Person.prototype.age = function () { //protoType tanımlarken tanımlanmak istenen constructor ismi prototype ve olusturmak istenen function ismi
    var tarih = new Date();
    return tarih.getFullYear() - this.yearsofBith;
}

var ersagun = new Person("ersagun", "tosun", 2004);
console.log(ersagun.age());