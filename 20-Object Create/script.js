//olusturulan bir nesnenin var olan bir nesnenin prototype kısmına olusturnmaya denir




let person = {
    merhaba: function () {
        console.log(`merhaba ${this.name}`);

    }
};

//1.yol

var ben = Object.create(person); //metoduna olusturulucak nesnenin ismi

ben.name = "ersagun"; //nesnenin icinde gecen degere veri verilir

ben.merhaba();


//2.yol

var o = Object.create(person, {
    name: {
        value: "fatih"
    },
    surname: {
        value: "tosun"
    }
});

o.merhaba();