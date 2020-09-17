//static metotlar sınıflara yardımci function uretmek icin kullanılır  
// static metot tanımlama formulu static Degisken adı {...}

class Islemler {
    static toplama(d1, d2) {
        return d1 + d2;
    }

    static carpma(d1, d2) {
        return d1 * d2;

    }

    static cıkarma(d1, d2) {
        let total = 0;

        if (d1 > d2) {
            total = d1 - d2;
        } else if (d2 > d1) {
            total = d2 - d1;
        } else {
            total = d1 - d2;
        }

        return total;

    }
    static bolme(d1, d2) {
        return d1 / d2;
    }


}


var d = 10;
console.log(Islemler.toplama(d, 20));
console.log(Islemler.carpma(12, 2));
console.log(Islemler.cıkarma(0, 2));
console.log(Islemler.bolme(6, 2));