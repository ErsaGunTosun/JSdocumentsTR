// sırayla yapılcak bir asekron programlama yapmak icin kullanılır 
// bir function diger funtion baglamaktadır

var peoples = [{
        name: "ersagun",
        surname: "tosun",
        age: 16
    },
    {
        name: "ferah",
        surname: "tosun",
        age: 60
    }
]


const PeopleAdd = (firstname, lastname, ega, callback) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            let people = {
                name: firstname,
                surname: lastname,
                age: ega
            };
            peoples.push(people);
            console.log(peoples);
            resolve();
    
    
    
        }, 2000)

    })

    setTimeout(() => {
        let people = {
            name: firstname,
            surname: lastname,
            age: ega
        };
        peoples.push(people);
        console.log(peoples);
        resolve();



    }, 2000)



}

const consoleWrite = () => {
    setTimeout(() => {
        peoples.forEach((element) => {
            console.log(element);
        })

    }, 500)
}

PeopleAdd("ceren", "tosun", 16).then(consoleWrite);//then metodu ile daha sonra hangi sey calısmacagı isler