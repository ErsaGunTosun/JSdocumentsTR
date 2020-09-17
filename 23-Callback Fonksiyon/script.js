	// baglantılı iki fonksiyonu birlestirme
	// function tanımlarken diger baska bir fonksiyonu tanımlamak icin yeni bir arguman atılır ve sanki o bir fonksiyon gibi islem yapılır

	function degerKaresi(a, b, c, callback) {

	    let arr = [];
	    for (let i = 0; i < 3; i++) {

	        arr[i] = callback(arguments[i] * arguments[i]);
	    }
	    return arr;
	}

	function birartır(a) {
	    return a + 1;
	}

	var val = degerKaresi(10, 4, 27, birartır);
	console.log(val);