function SuanNeYapıyorsun(deger) {

    switch (deger) {

        case "kitap okuyorum":

            return function (name) {
                console.log(`${name} hangi kitabı okuyorsun`);

            }

            break;

        case "kod yazıyorum":

            return function (name) {
                console.log(`${name} hangi programlama dilini kullanıyorsun`);

            }
            break;
        case "dinlenioyrum":

            return function (name) {
                console.log(name + ` iyi uykular`);

            }
            break;


    }

}


var val = SuanNeYapıyorsun("dinlenioyrum");

val("ersagun");           