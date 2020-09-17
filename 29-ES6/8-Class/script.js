// ES6 ile gelen daha onceden function ile yapılan kalıplar icin kullanılır
// ana bir class olusturulur ve icine constructor olusturulur eger icine ayrı bir prototype  olusturmak icin class icine tanımlanır

class Person {

    constructor(name, surname, yearsOfBirth, country) {
        this.name= name;
        this.surname = surname;
        this.yearsOfBirth= yearsOfBirth;
        this.country = country;
    }

    age(){
        let nowHistory = new Date();
        return nowHistory.getFullYear() -this.yearsOfBirth; 
    }

    full(){
        return `name : ${this.name}, surname : ${this.surname}, age : ${this.age()}, country : ${this.country}`
    }

}

let me = new Person("Ersagun","Tosun",2004,"Gaziantep");

console.log(me);
console.log(me.age());
console.log(me.full());
