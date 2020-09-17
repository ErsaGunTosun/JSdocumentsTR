//bir objenin icindeki degiskenlere kolay bir sekilde deger alma ve deger gondermek icin kullanılrı

// 1.yol 
let deger788 = {
    age: "ersagun",
    degerininbiiz: "244",
    get deger5667() {
        return this.age;
    },
    set dfg000(value) {
        let d555 = value.split(" ");
        degerininbiiz = d555[1];
    }

};

console.log(deger788);


//2.yol
let insan1 = {
    name: "ersagun",
    surname: "tosun",
    age: "20",

};

Object.defineProperty(insan1, "fullname", {
    get function() {
        return `${this.name1} ${this.surname1}`
    },
    set function(deger) {
        var deger2 = deger.split(' ');
        this.name1 = deger2[0];
        this.surname1 = deger2[1];

    }

});

console.log(insan1);

