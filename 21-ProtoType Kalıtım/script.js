// bir object nin ozeliklerini baska bir objeye atmak icin ykullanılır

function Person(name, surname, yearsofbirth) {
    this.name = name;
    this.surname = surname;
    this.yearsofbirth = yearsofbirth;

}

Person.prototype.age = function () {
    let tarih = new Date();
    return tarih.getFullYear() - this.yearsofbirth;
}


function Teacher(name, surname, yearsofbirth, subject) {
    Person.call(this, name, surname, yearsofbirth); //baska bir objenin ozellikleri almak icin call kullanılır
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype); //baska bir objectin prototype kısmını yeni bir objetin prototype kısmına olusturuyoruz

Teacher.prototype.constructor = Teacher;//teacher objectin constructor kısmını kendisi olması icin yapıyoruz


var ben = new Teacher("ersagun","tosun",2004,"matematik");

console.log(ben);

console.log(ben.age());

