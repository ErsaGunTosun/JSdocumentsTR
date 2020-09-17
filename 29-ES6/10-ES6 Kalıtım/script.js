//ES5 yaptıgımı kalıtırm class yapısında olmadıgı icin 
// ES6 class uygun kalıtım yapıyoruz

class Person {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
    }

    age() {
        let nowHistory = new Date();
        return nowHistory.getFullYear() - this.yearOfBirth;
    }

};



class Teacher extends Person{
    constructor(name,surname,yearOfBirth,subject){
        super(name,surname,yearOfBirth)
        this.subject=subject;
    }
}


let me = new Person("Ersagun","Tosun",2004);

let you = new Teacher("Fatih","Tosun",2004,"Matematik");

console.log(me.age());
console.log(you.age());
