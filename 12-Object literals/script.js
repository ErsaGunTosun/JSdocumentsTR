//coklu degisken ve degiskenne ozelik kazandırmak icin kullanılır
// tanımlanacak her degisken araısna virgül konur

//--tekli object olusturma

var Person = {
    name: "ersagun",
    surname: "tosun",
    age: 12,
    hobies: ["sofware", "read a book", "futbool"],
    adress: {
        country: "turkey",
        city: "gaziantep"
    },
};

console.log(Person.adress.city);
console.log(Person.hobies[0]);
console.log(Person.name);


//--Coklu object tanımlama

var Persons = [{
        name: "Fatih",
        surname: "tosun",
        age: 12
    },
    {
        name: "Ferah",
        surname: "tosun",
        age: 22
    },
    {
        name: "yigithan tugra",
        surname: "tosun",
        age: 6,
    }
];


console.log(Persons[0].name);
console.log(Persons[1].name);
console.log(Persons[2].name);


console.log(Persons[0].age);
console.log(Persons[1].age);
console.log(Persons[2].age);
