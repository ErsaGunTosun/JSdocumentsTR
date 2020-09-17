//sunucudan gelen veri turlerinde biri json 

let veri = new XMLHttpRequest();

veri.open("GET", "peoples.json", true);
veri.send();


veri.onload = () => {

    if (veri.status == 200) {
        let veriler = JSON.parse(veri.responseText);
        for (let i = 0; i < veriler.people.length; i++) {
            console.log(veriler.people[i].firstname);



        }

    } else {
        console.log("Veriler Bulunamadı");

    }

}