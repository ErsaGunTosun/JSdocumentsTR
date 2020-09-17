//kalıp object olusturmak icin kullanılır
//normal fonksiyon gibi tanımlanır

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;


};


var ersagun = new Person("ersagun", "tosun", 12);//person objesinin kopyasını olusturmak icin new ve object adı kullanılır


console.log(ersagun.name);