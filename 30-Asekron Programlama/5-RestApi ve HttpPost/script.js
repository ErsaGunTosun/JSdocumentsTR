var Data = new XMLHttpRequest();

var url = "https://jsonplaceholder.typicode.com/users"; //gondericegimiz yeri seciyoruz

var people = {
    id: 11,
    name: "Leanne tosun",
    username: "dafgd",
    email: "fsfsfss@april.biz",
    address: {
        street: "fsfs Light",
        suite: "Apt. 5256",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
}



var advancedPeople = JSON.stringify(people);
console.log(advancedPeople);



Data.open("POST", url, true);

Data.setRequestHeader("Content-type", "application/json charset=utf-8");

Data.onprogress = () => {
    console.log("calıstı");
    

}

Data.onload = () => {
    console.log("calıstı");

    if (Data.status === 201) {
        console.log(Data.responseText);

    } else {
        console.log("hata");

    }
}

Data.send(advancedPeople)


console.log("son calıstı");
